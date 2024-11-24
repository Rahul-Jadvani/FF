
# **FeedForward: Decentralized Food Redistribution Platform**

FeedForward is a Web3-powered platform that bridges the gap between surplus food and those in need. It uses blockchain technology for transparency, decentralized governance, and reward systems. With FeedCoin (an ERC-20 token) and NFT achievements, the platform incentivizes participation while fostering sustainability.

2. Built on the Sepolia blockchain, FeedForward ensures immutable records of food donations and rewards.  
3. Our DAO governance empowers community members to shape the platform's future through decentralized decision-making.  
4. By gamifying contributions with FeedCoin and NFTs, we create an engaging, impactful ecosystem for reducing food waste.

---

## **Features**
- **FoodFlags**:  
   Allows donors to signal food availability (location, quantity, etc.) securely on-chain.  

- **Real-Time Notifications**:  
   Alerts recipients nearby with GPS-enabled tracking and navigation.  

- **FeedCoin Rewards**:  
   Participants earn ERC-20 tokens for their contributions, redeemable for in-app perks.  

- **DAO Governance**:  
   FeedCoin holders can vote on platform policies and propose changes.  

- **NFT Achievements**:  
   Milestone contributions are recognized with ERC-721 NFTs, providing additional marketplace benefits.  

- **Social Impact Dashboard**:  
   Tracks individual and community-wide contributions, such as meals distributed and environmental impact.  

- **Gamification**:  
   Badges, points, and leaderboards promote active participation.  

---

## **Tech Stack**

### **Frontend & Backend**:
- **Next.js**: A full-stack framework for server-side rendering, dynamic routing, and optimized performance.  
- **React.js**: Enables interactive UI components.  
- **TailwindCSS**: For modern, responsive design.  
- **Framer Motion**: Smooth animations for enhanced user experience.

### **Blockchain/Web3**:
- **Sepolia Testnet**:  
   - Used for deploying and testing smart contracts.  
   - Provides a cost-effective, Ethereum-compatible environment.  
- **Smart Contracts**:  
   - Developed with **Solidity**, including:
     - FeedCoin (ERC-20 tokens).  
     - DAO governance contracts.  
     - NFT achievements (ERC-721 tokens).  
- **Wallet Integration**:  
   - MetaMask and WalletConnect for secure, decentralized authentication and transactions.

### **Database**:
- **PostgreSQL**:  
   - Robust and scalable relational database for storing user data securely (off-chain).  

### **AI & Analytics**:
- **Machine Learning Models**:  
   - Predicts food demand and optimizes distribution routes.  
- **Data Visualizations**: Powers the Social Impact Dashboard.  

### **Hosting**:
- **Vercel**: Hosts the Next.js application for seamless deployments.  

---

## **Web3 and Blockchain Features**
1. **Blockchain Integration**:  
   - FoodFlags and FeedCoin transactions are recorded on the Sepolia blockchain.  
   - Immutable records ensure transparency and trustworthiness.  

2. **Wallet Authentication**:  
   - Users log in with MetaMask or WalletConnect for secure decentralized access.  

3. **Smart Contracts**:  
   - Facilitate the creation and distribution of FeedCoin rewards, DAO governance, and NFT achievements.  

4. **DAO Voting**:  
   - Enables decentralized decision-making, giving users control over platform policies.  

5. **NFT Collectibles**:  
   - Significant contributions are rewarded with unique ERC-721 tokens.  

---

## **Awards**
FeedForward was awarded **"Best Project in Web3 and Blockchain"** at **Quantumaze 2.0**, a hackathon held at **Nitte Meenakshi Institute of Technology** from **November 14–16, 2024**.

---

## **Getting Started**

### **Prerequisites**
- Node.js and npm installed.  
- MetaMask browser extension.  
- Access to the Sepolia Testnet.  
- PostgreSQL database setup.  

### **Setup**

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/Sachin-pro-dev/Feed-Forward-Quantamaze.git
   cd Feed-Forward-Quantamaze
   ```  

2. **Install Dependencies**:  
   ```bash
   npm install
   ```  

3. **Set Environment Variables**:  
   Create a `.env.local` file in the root directory with the following details:  
   ```plaintext
   DATABASE_URL=<Your PostgreSQL Connection String>
   SEPOLIA_PRIVATE_KEY=<Your Sepolia Wallet Private Key>
   INFURA_PROJECT_ID=<Infura Project ID for Sepolia Access>
   ```  

4. **Start the Application**:  
   Run the server and application:  
   ```bash
   npm run dev
   ```  
   The application will run on [http://localhost:3000](http://localhost:3000).

---
```
