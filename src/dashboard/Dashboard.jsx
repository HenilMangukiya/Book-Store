import React from 'react'
import "./style.css"
const Dashboard = () => {
  return (
    <div class="main-content">
    <h1>Dashboard</h1>
    <div class="overview">
      <div class="card">
        <h3>Total Books</h3>
        <p>15</p>
      </div>
      <div class="card">
        <h3>Total Users</h3>
        <p>10</p>
      </div>
      <div class="card">
        <h3>Total Sales</h3>
        <p>$15</p>
      </div>
      <div class="card">
        <h3>Active Users</h3>
        <p>10</p>
      </div>
    </div>

    <div class="recent-activity">
      <h2>Recent Activity</h2>
      <ul>
        <li>Kabir mota purchased a book</li>
        <li>Henil Mangukiya signed up</li>
        <li>Vasu Bhimani left a review</li>
      </ul>
    </div>

    <div class="charts">
      <h2>Sales Chart</h2>
      <div class="chart-container">
        
        <img src="https://img.freepik.com/free-vector/illustration-data-analysis-graph_53876-18183.jpg" alt="" />
      </div>
    </div>

    <div class="user-feedback">
      <h2>User Feedback</h2>
      <div class="feedback-item">
        <p>Great platform, very user-friendly!</p>
        <span>- Vasu Bhimani</span>
      </div>
      <div class="feedback-item">
        <p>Found exactly what I was looking for.</p>
        <span>- Urmil Sakariya</span>
      </div>
    </div>
  </div>

  )
}

export default Dashboard