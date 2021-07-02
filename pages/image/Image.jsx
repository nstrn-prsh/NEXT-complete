import Image from "next/image";

export function ImagePage() {
     return (
          <div>
               <div>home</div>
               <Image
                    src='./fall.jpg'
                    alt='fall'
                    layout='fixed'
                    width={300}
                    height={200}
                    size='100vw'
                    quality={75}
                    priority={false}
                    unoptimized={false}
               />
          </div>
     );
}
