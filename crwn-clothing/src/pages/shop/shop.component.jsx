import React, { Component }  from "react";
import SHOPDATA from "./shop.data";
import CollectionPreview from '../../components/preview-collection/collection-preview.component';
class ShopPage extends Component{

    state={
        collections: SHOPDATA
        }

        render() {
            const {collections} = this.state
            return (
                <div className="shop-page">
                    {
                        collections.map(({id, ...otherCollectionProps}) => (
                            <CollectionPreview key={id}{...otherCollectionProps}> </CollectionPreview>
                            
                        ))
                        
                    }
                    
                </div>

            )
        }
        
          
    }

export default ShopPage;
