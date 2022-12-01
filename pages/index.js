import getConfig from 'next/config';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../demo/service/PhotoService';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ProductService } from '../demo/service/ProductService';

const Dashboard = () => {
    let emptyProduct = {
        id: null,
        name: '',
        image: null,
        description: '',
    };

    const [products, setProducts] = useState(null);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const [images, setImages] = useState([]);

    const galleriaResponsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        const productService = new ProductService();
        productService.getProducts().then((data) => setProducts(data));

        const photoService = new PhotoService();
        photoService.getImages().then((images) => setImages(images));
    }, []);

    const galleriaItemTemplate = (item) => <img src={`${contextPath}/${item.itemImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    const galleriaThumbnailTemplate = (item) => <img src={`${contextPath}/${item.thumbnailImageSrc}`} alt={item.alt} style={{ width: '100%', display: 'block' }} />;

    return (
        <div className="grid crud-demo">
           
            <div className='col-12'>
                <div className="card">
                    <h5>View All Images</h5>
                    <Galleria value={images} responsiveOptions={galleriaResponsiveOptions} numVisible={7} circular style={{ maxWidth: '700px', margin: 'auto' }} item={galleriaItemTemplate} thumbnail={galleriaThumbnailTemplate}></Galleria>
                </div>
            </div>
        </div>
    );
};
    

export default Dashboard;
