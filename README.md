# 🌿 AyuChain: A Blockchain-Powered Traceability System

This repository contains the full-stack solution for the **Ayurvedic Traceability System**, developed by Team AyuChain for the Smart India Hackathon. Our goal is to solve the problem of an unorganized supply chain by leveraging blockchain technology to create trust and transparency.

---

### 💡 The Problem

The traditional Ayurvedic supply chain in India suffers from a lack of transparency and traceability. This often leads to issues such as:

* **Adulteration and Poor Quality Control**: Herbs pass through many middlemen, increasing the risk of contamination and quality degradation.
* **Lack of Provenance**: There is no reliable way for manufacturers, regulators, or consumers to verify the origin of raw herbs.
* **Unsustainable Practices**: Over-harvesting of rare or endangered plant species goes unchecked due to poor record-keeping.

Our solution aims to create a trustworthy and transparent digital ledger for the entire journey of an herb, from its collection to the final product.

---

### 🚀 Our Solution: End-to-End Traceability

Our system uses a **permissioned blockchain** (Hyperledger Fabric) to create an immutable and secure record of every step in the supply chain.

* **Farmer/Collector App**: A simple mobile app allows farmers to log geo-tagged data about the herb collection, including GPS location, timestamp, and collector ID. This information is written to the blockchain.
* **Supply Chain Events**: Subsequent events like processing, lab testing (for quality and purity), and packaging are also recorded on the blockchain by the respective participants.
* **Consumer Transparency**: Each final product is marked with a unique QR code. When scanned, this code reveals the complete, tamper-proof history of the herb batch, including its origin, test results, and processing details.

---

### 🛠️ Tech Stack

* **Blockchain**: **Hyperledger Fabric** - The decentralized, immutable ledger for all supply chain events.
* **Smart Contracts**: **Go** (Chaincode) - Defines the business logic and rules for recording and querying data on the blockchain.
* **Backend & API Gateway**: **Node.js** with **Express.js** - The intermediary layer that connects the front-end applications to the blockchain network.
* **Frontend**:
    * **Mobile App**: **React Native** - For the farmer/collector's data entry interface.
    * **Web Portal**: **React.js** - For the consumer's QR code scanning and provenance report view.
* **Collaboration**: **GitHub** - For version control and team synchronization.

---

### 👥 Team AyuChain - Roles

* **Blockchain Architect & Developer**: [Teammate 1 Name] and [Teammate 2 Name]
* **Backend & API Developers**: [Teammate 3 Name] and [Teammate 4 Name]
* **Frontend Developers**: [Teammate 5 Name] and [Teammate 6 Name]

---

### 🏁 Getting Started for Developers

To begin contributing to the project, follow these steps:

1.  **Clone the repository**:
    ```sh
    git clone [https://github.com/AyuChain/ayurvedic-traceability-system.git](https://github.com/AyuChain/ayurvedic-traceability-system.git)
    cd ayurvedic-traceability-system
    ```

2.  **Stay synchronized**: Always pull the latest changes from the `main` branch before starting work.
    ```sh
    git pull origin main
    ```

3.  **Create a new branch**: For each new task, create a dedicated feature branch.
    ```sh
    git checkout -b feature/[your-task-name]
    ```

4.  **Work on your component**: Navigate to your assigned folder (`backend/`, `blockchain/`, `frontend/mobile-app/`, or `frontend/web-portal/`) and follow the specific setup instructions there.

5.  **Commit and push changes**:
    ```sh
    git add .
    git commit -m "feat: [Your short description]"
    git push origin feature/[your-task-name]
    ```

6.  **Create a Pull Request**: Once your work is complete, open a Pull Request on GitHub to merge your changes into the `main` branch.
