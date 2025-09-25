const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// A simple test route to ensure the server is running
app.get('/', (req, res) => {
    res.send('AyuChain Backend API is running!');
});

// Endpoint 1: Herb Collection from Farmer's App
app.post('/api/collect', (req, res) => {
    // This is where the blockchain logic will go.
    const { herbType, quantity, unit, collectorID, location } = req.body;
    console.log('Received herb collection data:', { herbType, quantity, unit, collectorID, location });

    // In a real scenario, you would invoke a smart contract here.
    const mockBatchID = `AYU_${Date.now()}`;
    
    // Respond with a success message and a unique batch ID
    res.status(201).json({
        message: 'Herb batch recorded successfully',
        batchID: mockBatchID
    });
});

// Endpoint 2: Processing and Quality Checks
app.post('/api/process', (req, res) => {
    // This is where the blockchain logic will go for updates.
    const { batchID, eventType, eventData } = req.body;
    console.log(`Received processing data for batch ${batchID}:`, { eventType, eventData });

    // In a real scenario, you would update the existing blockchain record.
    
    res.status(200).json({
        message: 'Processing data added successfully',
        batchID: batchID
    });
});

// Endpoint 3: Provenance Tracking for Consumer App
app.get('/api/track/:batchID', (req, res) => {
    const { batchID } = req.params;
    console.log(`Received tracking request for batch ${batchID}`);

    // This is a mock blockchain record. During the hackathon, this will be replaced with
    // a real query to the Hyperledger Fabric ledger.
    const mockProvenanceRecord = {
        batchID: batchID,
        herbType: "Ashwagandha",
        events: [
            {
                eventType: "collection",
                date: "2025-09-24",
                data: {
                    collectorID: "Ayurveda-Farmer-001",
                    location: { latitude: 28.7041, longitude: 77.1025 }
                }
            },
            {
                eventType: "lab_test",
                date: "2025-09-25",
                data: {
                    labName: "Natural Labs",
                    testResults: "98% Purity"
                }
            }
        ]
    };
    
    res.status(200).json({
        message: "Traceability data found",
        provenanceRecord: mockProvenanceRecord
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});