import './aftercare.css';
import aftercare1 from '../../assets/aftercare1.jpg';

type AftercareProp = {
  isMobile: boolean;
};

export default function Aftercare({ isMobile }: AftercareProp) {
  return (
    <div className='section layer1 text-white'>
      <h1 className='text-center text-5xl py-10'>AFTERCARE</h1>
      <div>
        <section className='flex justify-center gap-14 px-40 pb-10 max-sm:px-4 max-sm:flex-col max-sm:gap-3 max-sm:pb-14'>
          <div className='w-1/2 max-sm:w-full h-auto'>
            <img src={aftercare1} alt='' />
          </div>
          <div className='w-1/2 max-sm:w-full'>
            <h1 className='font-bold text-3xl pb-2'>Lorem ipsum dolor sit.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam ipsa quam, corrupti modi dolor aliquam unde facilis
              perspiciatis, odio, iusto tenetur quia a! Minus, reiciendis a!
              Fuga tempore quam iste? Iusto ad eaque libero error
              necessitatibus? Impedit modi est, totam excepturi laudantium odit
              facere rem, adipisci, veritatis ipsum vero doloribus deleniti sit
              voluptatem commodi incidunt! Vero consequuntur et excepturi
              numquam.
            </p>
          </div>
        </section>

        {isMobile ? (
          <section className='flex justify-center gap-14 px-40 pb-10 max-sm:px-4 max-sm:flex-col max-sm:gap-3 max-sm:pb-14'>
            <div className='w-1/2 max-sm:w-full h-auto'>
              <img src={aftercare1} alt='' />
            </div>
            <div className='w-1/2 max-sm:w-full'>
              <h1 className='font-bold text-3xl pb-2'>
                Lorem ipsum dolor sit.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam ipsa quam, corrupti modi dolor aliquam unde facilis
                perspiciatis, odio, iusto tenetur quia a! Minus, reiciendis a!
                Fuga tempore quam iste? Iusto ad eaque libero error
                necessitatibus? Impedit modi est, totam excepturi laudantium
                odit facere rem, adipisci, veritatis ipsum vero doloribus
                deleniti sit voluptatem commodi incidunt! Vero consequuntur et
                excepturi numquam.
              </p>
            </div>
          </section>
        ) : (
          <section className='flex justify-center gap-14 px-40 pb-10 max-sm:px-4 max-sm:flex-col max-sm:gap-3 max-sm:pb-14'>
            <div className='w-1/2 max-sm:w-full'>
              <h1 className='font-bold text-3xl pb-2'>
                Lorem ipsum dolor sit.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam ipsa quam, corrupti modi dolor aliquam unde facilis
                perspiciatis, odio, iusto tenetur quia a! Minus, reiciendis a!
                Fuga tempore quam iste? Iusto ad eaque libero error
                necessitatibus? Impedit modi est, totam excepturi laudantium
                odit facere rem, adipisci, veritatis ipsum vero doloribus
                deleniti sit voluptatem commodi incidunt! Vero consequuntur et
                excepturi numquam.
              </p>
            </div>
            <div className='w-1/2 max-sm:w-full h-auto'>
              <img src={aftercare1} alt='' />
            </div>
          </section>
        )}

        <section className='flex justify-center gap-14 px-40 pb-10 max-sm:px-4 max-sm:flex-col max-sm:gap-3 max-sm:pb-14'>
          <div className='w-1/2 max-sm:w-full h-auto'>
            <img src={aftercare1} alt='' />
          </div>
          <div className='w-1/2 max-sm:w-full'>
            <h1 className='font-bold text-3xl pb-2'>Lorem ipsum dolor sit.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam ipsa quam, corrupti modi dolor aliquam unde facilis
              perspiciatis, odio, iusto tenetur quia a! Minus, reiciendis a!
              Fuga tempore quam iste? Iusto ad eaque libero error
              necessitatibus? Impedit modi est, totam excepturi laudantium odit
              facere rem, adipisci, veritatis ipsum vero doloribus deleniti sit
              voluptatem commodi incidunt! Vero consequuntur et excepturi
              numquam.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
