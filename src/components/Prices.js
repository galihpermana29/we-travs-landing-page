import React from 'react';
import styles from './Price.module.css';
import PriceType from './PriceType';

const Prices = () => {
   return (
      <div className={styles.price}>
         <div className="container">
            <div className={styles.priceC}>
               <div className={styles.title}>
                  <h1>Browse our price</h1>
                  <p>We Travs serving more than 30 years and spread across 63 countries. All transactions at We Travs are guaranteed safe</p>
               </div>
               <div className={styles.type}>
                  <PriceType type="Domestic"/>
                  <PriceType type="Local"/>
                  <PriceType type="Custom"/>
               </div>
            </div>
         </div>
      </div>
   );
}
 
export default Prices;