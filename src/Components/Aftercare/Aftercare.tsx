import './aftercare.css';
import { useEffect, useRef, useState } from 'react';
import aftercare1 from '../../assets/aftercare1.jpg';

type AftercareProp = {
  isMobile: boolean;
};

export default function Aftercare({ isMobile }: AftercareProp) {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();

  const [section1RefIsVisible, setSection1RefIsVisible] = useState(false);
  const [section2RefIsVisible, setSection2RefIsVisible] = useState(false);
  const [section3RefIsVisible, setSection3RefIsVisible] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setSection1RefIsVisible(entry.isIntersecting);
    });
    observer1.observe(section1Ref.current);

    const observer2 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setSection2RefIsVisible(entry.isIntersecting);
    });
    observer2.observe(section2Ref.current);

    const observer3 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setSection3RefIsVisible(entry.isIntersecting);
    });
    observer3.observe(section3Ref.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
      observer3.disconnect();
    };
  }, []);

  return (
    <div className='section layer1 text-white overflow-x-hidden'>
      <h1 className='text-center text-5xl py-10'>AFTERCARE</h1>
      <div>
        {/* SECTION 1 */}

        <section
          ref={section1Ref}
          className={` flex justify-center gap-14 px-40 pb-10 max-sm:px-4 max-sm:flex-col max-sm:gap-3 max-sm:pb-14 max-sm:w-screen`}
        >
          <div
            className={`image w-1/2 max-sm:w-full h-auto ${
              section1RefIsVisible ? 'show' : 'hide'
            }`}
          >
            <img src={aftercare1} alt='' />
          </div>
          <div
            className={`txt w-1/2 max-sm:w-full ${
              section1RefIsVisible ? 'show' : 'hide'
            }`}
          >
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

        {/* SECTION 2 */}

        {isMobile ? (
          <section
            ref={section2Ref}
            className='flex justify-center gap-14 px-40 pb-10 max-sm:px-4 max-sm:flex-col max-sm:gap-3 max-sm:pb-14'
          >
            <div
              className={`image w-1/2 max-sm:w-full h-auto ${
                section2RefIsVisible ? 'showReverse' : 'hideReverse'
              }`}
            >
              <img src={aftercare1} alt='' />
            </div>
            <div
              className={`txt w-1/2 max-sm:w-full ${
                section2RefIsVisible ? 'showReverse' : 'hideReverse'
              }`}
            >
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
          <section
            ref={section2Ref}
            className='flex justify-center gap-14 px-40 pb-10 max-sm:px-4 max-sm:flex-col max-sm:gap-3 max-sm:pb-14'
          >
            <div
              className={`txt w-1/2 max-sm:w-full ${
                section2RefIsVisible ? 'showReverse' : 'hideReverse'
              }`}
            >
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
            <div
              className={`image w-1/2 max-sm:w-full h-auto ${
                section2RefIsVisible ? 'showReverse' : 'hideReverse'
              }`}
            >
              <img src={aftercare1} alt='' />
            </div>
          </section>
        )}

        {/* SECTION 3 */}

        <section
          ref={section3Ref}
          className={` flex justify-center gap-14 px-40 pb-10 max-sm:px-4 max-sm:flex-col max-sm:gap-3 max-sm:pb-14`}
        >
          <div
            className={`image w-1/2 max-sm:w-full h-auto ${
              section3RefIsVisible ? 'show' : 'hide'
            }`}
          >
            <img src={aftercare1} alt='' />
          </div>
          <div
            className={`txt w-1/2 max-sm:w-full ${
              section3RefIsVisible ? 'show' : 'hide'
            }`}
          >
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
