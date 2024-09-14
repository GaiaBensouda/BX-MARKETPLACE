import { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'products'));
        const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
      } catch (error) {
        console.error('Erreur lors de la récupération des produits : ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Liste des produits</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
}
