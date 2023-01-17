import getConfig from 'next/config';
import { Image } from 'primereact/image';
import { PhotoService } from '../../../demo/service/PhotoService';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ProductService } from '../../../demo/service/ProductService';

export const getStaticProps = async () => {
    const res = await fetch ('http://localhost:5000/shows');
    const data = await res.json();

    return {
        props: { image_blob : data }
    }
}

const getdata = ({ image_blob }) => {
    const [products, setProducts] = useState(null);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const [images, setImages] = useState([]);

    useEffect(() => {
        const productService = new ProductService();
        productService.getProducts().then((data) => setProducts(data));

        const photoService = new PhotoService();
        photoService.getImages().then((images) => setImages(images));
    }, []);

    return (
        <div className="grid crud-demo">
            <div className='col-12'>
                <div className="card">
                    <h5>View All Images</h5>
                    <div className="grid text-center">
                    {image_blob.map( datas => (
                        <>  
                        <div className='card border-round m-2'>
                            <Image src={`data:image/png;base64, ${datas.image}`} alt="alaws" width={200} preview />
                            <h5>{ datas.datetime }</h5>
                        </div>
                        </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
  }
    
export const config = {
    api: {
      bodyParser: {
        sizeLimit: '4mb',
      },
    },
  }
  
export default getdata;
