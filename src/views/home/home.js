import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from '../../components/mainFeaturedPost/MainFeaturedPost';
import FeaturedPost from '../../components/featuredPost/FeaturedPost';
import ProductsPreview from '../../components/productsPreview/ProductsPreview';

const mainFeaturedPost = {
  title: '¡Encontrá tu planta ideal!',
  description:
    "Seleccionamos las mejores plantas para que te acompañen en tu hogar. Todas son empaquetadas cuidadosamente y con material compostable",
  image: 'https://firebasestorage.googleapis.com/v0/b/my-ecommerce-chofi.appspot.com/o/home.jpg?alt=media&token=822e154a-0633-46f9-b8b5-b39ba2b09d3a',
  imgText: 'jardin',
  linkText: 'Ir a la tienda',
};

const featuredPosts = [
  {
    title: 'Plantas',
    description:
      '¿Querés una planta y no sabés cuál? Nosotrxs te ayudamos. Visitá nuestra tienda y elegí la que más te guste.',
    image: 'https://firebasestorage.googleapis.com/v0/b/my-ecommerce-chofi.appspot.com/o/adan.jpg?alt=media&token=365959ec-5322-4b39-9f73-79ea3c5cd3cd',
    imageText: 'plantas',
    category: 'planta',
  },
  {
    title: 'Macetas',
    description:
      'Los diseños de macetas más originales para decorar tu hogar. Todas son hechas a mano con materiales resistentes al agua y mucho amor <3',
    image: 'https://firebasestorage.googleapis.com/v0/b/my-ecommerce-chofi.appspot.com/o/flowers.jpg?alt=media&token=01c2ffa2-24d0-4e6b-86ec-757bf244412d',
    imageText: 'macetas',
    category: 'maceta',
  },
];

export default function Home() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
        <ProductsPreview/>
      </Container>
    </React.Fragment>
  );
}