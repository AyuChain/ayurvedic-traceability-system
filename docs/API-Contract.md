# API Contract for AyuChain

This document defines the REST API endpoints for the AyuChain traceability system. It serves as a single source of truth for the Backend and Frontend teams to ensure seamless integration.

**Base URL**: All endpoints are relative to your API server's base URL (e.g., `http://localhost:3000`).

---

## 1. Herb Collection

This endpoint is used by the **Farmer's Mobile App** to record a new herb batch on the blockchain.

* **Endpoint**: `POST /api/collect`
* **Description**: Records the initial collection event of a new herb batch.
* **Request Body (JSON)**:
    ```json
    {
      "herbType": "string",
      "quantity": "number",
      "unit": "string",
      "collectorID": "string",
      "location": {
        "latitude": "number",
        "longitude": "number"
      }
    }
    ```
* **Success Response (201 Created)**:
    ```json
    {
      "message": "Herb batch recorded successfully",
      "batchID": "string"
    }
    ```
* **Error Response (400 Bad Request)**:
    ```json
    {
      "error": "string"
    }
    ```

---

## 2. Processing and Quality Checks

This endpoint is used by **processors, labs, or manufacturers** to update an existing herb batch's record with new information.

* **Endpoint**: `POST /api/process`
* **Description**: Adds a new event to an existing herb batch's traceability record on the blockchain.
* **Request Body (JSON)**:
    ```json
    {
      "batchID": "string",
      "eventType": "string",  // e.g., "processing", "lab_test", "packaging"
      "eventData": {
        "detail1": "string",  // Details vary based on eventType
        "detail2": "string"
      }
    }
    ```
    * **Example for `eventType: "lab_test"`**:
        ```json
        {
          "labName": "string",
          "testResults": "string",
          "date": "string"
        }
        ```
* **Success Response (200 OK)**:
    ```json
    {
      "message": "Processing data added successfully",
      "batchID": "string"
    }
    ```
* **Error Response (400 Bad Request / 404 Not Found)**:
    ```json
    {
      "error": "string"
    }
    ```

---

## 3. Provenance Tracking

This endpoint is used by the **Consumer Web Portal** to retrieve the complete history of an herb batch.

* **Endpoint**: `GET /api/track/:batchID`
* **Description**: Retrieves the full, immutable provenance record of a product.
* **Parameters**: The unique `batchID` from the product's QR code.
* **Success Response (200 OK)**:
    ```json
    {
      "message": "Traceability data found",
      "provenanceRecord": {
        "batchID": "string",
        "herbType": "string",
        "events": [
          {
            "eventType": "string", // e.g., "collection", "processing", "lab_test"
            "date": "string",
            "data": { /* details of the event */ }
          },
          // ... more events
        ]
      }
    }
    ```
* **Error Response (404 Not Found)**:
    ```json
    {
      "error": "string"
    }
    ```
