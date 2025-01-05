import Link from "next/link";

import Product from "../Products/Product";
import { productdata } from "@/app/Data/Productdata";



interface TopPicksProps {
  title?: string;
  showDescription?: boolean;
}


function Picksforyou({ title = 'Top Picks For You', showDescription = true }: TopPicksProps) {
  // IDs of the products 
  
  const selectedProductIds = ["1", "2", "3", "4"];
  // Filter products to include only the selected IDs
  const filteredProducts = productdata.filter((productdata) => selectedProductIds.includes(productdata.id));

  return (
    <>
      <div className="h-[777] text-black">

        {/*Content*/}
        <div>
          {/*Title*/}
          <p className="text-[36px] text-center py-[30px]">{title}</p>
             {/* Conditional Description */}
        {showDescription && (
          <p className="text-[16px] text-[#9F9F9F] text-center py-[6px]">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        )}
        </div>

        {/*Getting 4 Products*/}
        <div className="flex flex-wrap justify-center items-start bg-[#ffffff] gap-[40px]">
        {filteredProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              imageSrc={product.imageSrc}
              price={product.price}
            />
          ))}
        </div>

       

        {/*view more link for shop */}

        <div className="text-[24px] underline underline-offset-[16px] text-center font-medium md:py-16">
                <Link href="/Shop">View more</Link>
              </div>
       
      </div>

     

     
    </>
  );
}

export default Picksforyou;
