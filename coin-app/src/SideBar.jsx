// src/BitcoinComponent.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const SideBar = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Bitcoin Price',
                data: [40000, 42000, 44000, 43000, 45000, 46000],
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="bitcoin-component">
            <div className="header">
                <div className="logo-section">
                    <img src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D" alt="Logo" className="logo" />
                    <button className="follow-button">Follow</button>
                </div>
                <div className="button-section">
                    <button className="top-button">Top</button>
                    <button className="latest-button">Latest</button>
                </div>
            </div>
            <div className="content">
                <p className="description">
                    Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.
                </p>
                <div className="console">
                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default SideBar;
