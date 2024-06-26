import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Coin = () => {
    const [data, setData] = useState({
        price: null,
        marketCap: null,
        volume: null,
        circulatingSupply: null,
        totalSupply: null,
        maxSupply: null,
        fullyDilutedMarketCap: null,
        volumeMarketCapRatio: null
      });
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin');
            const bitcoinData = response.data.market_data;
    
            setData({
              price: bitcoinData.current_price.usd,
              marketCap: bitcoinData.market_cap.usd,
              volume: bitcoinData.total_volume.usd,
              circulatingSupply: bitcoinData.circulating_supply,
              totalSupply: bitcoinData.total_supply,
              maxSupply: bitcoinData.max_supply,
              fullyDilutedMarketCap: bitcoinData.fully_diluted_valuation.usd,
              volumeMarketCapRatio: (bitcoinData.total_volume.usd / bitcoinData.market_cap.usd).toFixed(4),
            });
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
        fetchData();
      }, []);
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error loading data: {error.message}</p>;
    
      return (
        <div className="bitcoin-dashboard">
          <div className="bitcoin-data-box">
            <div className="data-item">
                <h1>Bitcoin (BTC)</h1>
            </div>
            <div className="data-item">
              <span className="value top">${data.price?.toLocaleString()}</span>
            </div>
            <div className="data-item">
              <span className="label">Market Cap:</span>
              <span className="value">${data.marketCap?.toLocaleString()}</span>
            </div>
            <div className="data-item">
              <span className="label">24h Volume:</span>
              <span className="value">${data.volume?.toLocaleString()}</span>
            </div>
            <div className="data-item">
              <span className="label">Volume/Market Cap (24h):</span>
              <span className="value">{data.volumeMarketCapRatio}</span>
            </div>
            <div className="data-item">
              <span className="label">Circulating Supply:</span>
              <span className="value">{data.circulatingSupply?.toLocaleString()} BTC</span>
            </div>
            <div className="data-item">
              <span className="label">Total Supply:</span>
              <span className="value">{data.totalSupply?.toLocaleString() || 'N/A'} BTC</span>
            </div>
            <div className="data-item">
              <span className="label">Max Supply:</span>
              <span className="value">{data.maxSupply?.toLocaleString() || 'N/A'} BTC</span>
            </div>
            <div className="data-item">
              <span className="label">Fully Diluted Market Cap:</span>
              <span className="value">${data.fullyDilutedMarketCap?.toLocaleString()}</span>
            </div>
          </div>
        </div>
      );
};

export default Coin;
