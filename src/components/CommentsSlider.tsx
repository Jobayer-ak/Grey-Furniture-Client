import { AiFillStar } from 'react-icons/ai';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../index.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const url =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUYGBgYGBgYGBgYGBgYGBgYGBgaGRoZGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHj8nJCs0NDQ0NDQ2NDQ0NTQ2QDQ0NDQ0NDQ0NDQ0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBQYEBwj/xABIEAACAQIEAwQHBAYIAwkAAAABAgADEQQSITEFQVEGImFxEzJCUoGRoQdiscFygpKi0fAUIySys8Lh8TNTYxUWNENkc6PS4v/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACYRAAMAAgIBBAEFAQAAAAAAAAABAgMREiExBDJBURMiM2FxgbH/2gAMAwEAAhEDEQA/APUhARAYsAWF4kWALAxLxYACESEAUmF4RIAsLxLxRACLEiwBYTNcU7Z4bDoWdiWVzTZF1dSCRcrva1jpe4InmPa77QHrsBQd6QUOjBXazq1tSthqNd7b7aSNk6PXv+8uD1H9Jpd02PfXQ5slv2tPMjrLRWBFwbjwnyqlRiRl31ml4N2mx+HIKVWZVCjI3eGS9yNdRvv5RsnR9C3iTyfgv2g4nOPSqHX2luAbE2uvQjTwN+W83w42KlMVMPZwQSL23GmU94FSDodDGyNMuIs4OD430tMOy5W1V1PJhv8ACd8kgS0BCLAEgYsSAJEMdEIgDYkIQBpjDJDI2EAiYSJxJzI3EkHPkhJLQgFiI6IIokAWLEiiAELwiQBYQhACESEAWEIQAEpe0XaClhka9WmKgXMEdhmI09kG/MS7E+dO3HFmr4mp7qsbaa2236Wtpt+MhkpFZxjGrVqu6KEzEnKpNt9x0HhtG4PCoe85AHU318gJy4a2YDfX+TNVwzsu+I7xay7KPCVqkjSZdeCsqYmmo7qqwHmrfgJG3EV3UHN9f4Td4X7PEtqzX8NJ1j7NaVjdz4SnJGn42eaVcfm1UZTbTof5vLjh3aCrSUhGtmKFri/eve4HvTWD7OlF8xv0A0MyvaTsycMVYaqTbnofOFa3oh43rZ6P2G7QNUdqFRAHZfSKwFs21wRyI0m5vPGOw3EBTxNNqhORgUBPsFuvhmtPZxNUzGlphFiRbSSoQhFgCRCI6IYAy0QiPMaRAGmRtJDGmARGMaPaMMAZaLFtEgHeItogjhAEMWEWAJCBiwBIRYkAIQgYAkURDC8AUz5j7Sf+KxAvf+vq3I5tnbMR8bz6cBnzF2holcZiEN7jEVQb7m1RrE+Y1+Mhko6uA8CeoQx2I003B5z17g2HCqABtMj2esqC9gABe81+A4hSuF9Il/MTlqm2d8SpnovqIE6bzjoVVPMfOTs4G5tJRRrsdUmb7T8PFWg6W1sSPMbS6r46ku7qP1hf5TirYhXBysDy0PWQyUjxOu5W3hv8Nx5ie9dk8W9bB0Kj+u1MZj1YaE/G1/jPCu0SlKjAcmOluY/jPeOzFMLg8Oo2FGnb9gGdEHJfT0WsWAhLlBYQhAAQMWFoAyIY8iNMAYY0x5Ea0AiaRmStIWgCWiRbxIB3iPEjEfeALC8SEADAQMQQBYRIsAIQiQAMIGJeALPCftRwqJxJintqjuB75Fj5GwU28b857sJ479qWBVccjg+uqMw6EXS/xCLK0+i8LbK5KLHc2RQLi9rmPC4eoLKlXNyZc5uR10t9ZoeA00dLOoPnNDh+DIuqs4HQZfxIv9Zypnc5MjwSpVpVEQh8pbLc3t9Rr57eM2fHUbIMgJJGw+crMSi+lUDkfPXxJ5zRPplv0kh9aPMqSJ6XNWp1mLarlDlN7d7Ke78RLzCqGs9EFLHvKb6j42PWax+GU2OYXF+h0kgoKgsJDTG0eP8AbLCE4vKNC5S19B3gFNzPdMDhxTpoi7IiILdFUD8p5jxrhor46ipGmUlrdEJZb+F9PjPU0Gg8hOjG9o5M06ex0WEJoYixREhAHRIQgCGEIQBrSJpKZG0AjaRNJWkTQBsIsIB1gx95Gpj4A6EQRYAsSEIAQhCAESLEgAY0x0baAKJ519rXDwVpVwNRdCetjnUf356KJw8c4amJoPTdcwKkrqQQ4U5SCOesiltForT2eX8CxmXL0M01fjChbZreP5CeecKxuUJmFsrgMDuAe7Y/zyk/aGlVbEOiaiwZNbAobEW+Nx8Jy8e9Heq2h2O7QOlQlHLANcaD5X3lwvbKo1rlVy2zd0ufqRKvgXBqTMDWd1NwSqo3UX9kjb8Jo8d2dwx7wetmYteyLY2sF7oX3R01NpbSI3W+/wDhb0+LoEFRHzr7S8x42neuNDqCNiNJ59xLglemjOjXpqAbFcrnXlY7DTWX3p/Q06aE9/KWb+HzMq+iX/J1cLPpMcw17qKv7bgn6LPQJgvs6pZ3xFdlv3lRWJ6A3t895vZ0Y50jjy1yYQhFEuZBCF4QBYQhAC8bHRCIAwxjR5jGgEbSJpK0jMAjhHWiQDqWPEiQx94A+KIy8UGAPiRIsAWIYQgBC8LxIAsQRYkAcIQEIB4R294a2FxbixFOraohG2+o8wR9RDhvGw7KH17ipfoASfzm6+1ukj4amhI9J6TMgv3soRg5/R7yA+YnjNKoUax0tf8A016TOpT6NpqpSZ6GeKNTOmUjlfz01E7MN2qdzkQC5tbQtfymM4fxNb3bU7AHW1xYfnLSnxBUBYACwW1t7X/3+cy4tHSrT+TT9qeJ5KGS92e2bwHwmNr8Qd3IFyz2RANTrsAPlODH8QZz3mub9dLTa/ZlwxFqivXKqxUiirkAliR3hf2rXsPGWmUvJjVN70ehdmOFf0bDJSNswGZyObtqfO2g+Etrx0aRNzmCKDEtFgBFhAQAEIsSAESBMaTAEaRtHMYxjAGGRtHsZGxgDYQvCATIZKDIEkywBwiiIIogDoQEW0ASLCIYAsIghAFiRRIsRikQXdwvmdT5DcwSlvwSyDH45KFN6tVsqILsd/AADmSbADmTM5xDtdfMMMqtk9Z3vlGtrKBufjp0mE7Q8TxFfuVHZhldguirmVCQcoAF7C3xMryW9Gs4Ka5a6OXjWPqYnFtUcnVLIvsomY2UfK5PMkyi4pwwkkjQzSPSVglRSM1rkc8p1F/iTOgYYOJg6e9nU4nWl4PPThHHK9uk7cPgKr2AVteu2/jNqOG+Es8FhNpLtlFiRTcA7KgHO4zHlfYeP4S47Q8PZvQZBqtVNtNCbTR4aiAIlSmGdeiHOfOxAH1P0lNtvZeUl0i/4PizUQhvXRij/DVW8bgg+d5YTzvhuOcVi6Egszj7pWykZgf0Rr5zUU+NlVzOlwBcldwOZyn4c508l4Zy1hrXJLovLQnNhMfTqC6OGv46/KdUsZNNeRIWhFAggIkUxpgCGNYxxjGgDTGGOMYYAxjGNFaRkwAvCMvCAdCyVZEslEAeIoiCKIAsURsWAOiWhI8RXVFLuwVV3J2EAkErsdxmlT0zZm91SND4nYTGcb7UvXqJQo9ymx1c6Fha+xPPS3h15cuIpKpzOSbHQbADbQEC3LZT5ylNo6MOJU+/g0WJ7Qu9xdUAuTZrm3i2/MbZZjf6bnDu9YNfMNzzAU6c7K77+6JZ1RTWlUYadxuY3+IHTrM9RWn6K/8ADmtbkdOS8xy1kyt9stkfCtT4LfBBEwwOYEPU5esQNDOXixphg+a6o4D2H/luAG168viZPhlREoAa3N9rcr8nv+HnI+NMio67Z2C3uptqxvbKOnUecrr9Rsrr8LODgVXLnR1uysFA1tZr78zZlb6XvpL/AAuGDAMtiD0II031G8yVNmszWIGUI2XX1XVXIAJ2TMCedmOt5qezWJHpkpoc9FgFC62F2sNb7ga+S2lblN9FMd7nT8ou6WDBGoj0wljpNKnDk2t8j/GSpw5B1+cj8TK/mRQVHyLfnsB1MouJ8RejTOpc1TYDwJsSCPlcHe06+1dUhlaipZUJBRRdnuRdlO+YcuXle8oHxRrVS1iaaqctgwY2Hf21V7KRtuBcGWiVvsnJtSv5LXhJQnMGACoTqdRf+IOYeBEuadam2mdbG4sdN5nuDlHFVj76g2AtbKSAO+BbUgeAHkLFVS3l+h+TL+Jk1K5GuKm40VGErojVKRqWZGNiL+yGcHMPuhh+vL/gHH3ysrVkcoQDc30Olr+YMzWIRFxrr75T3fayJ0bx5jyjez1emajC3rUw243yqf8Al29qXc9bRy822uR6ZhuLo2h08Qcw+mssVYEXBBB2I2M87tTzdD1BN/yH4Sww3GWwzJnJek5KNbdW3DW+nj47ys0y2XCktybQxDEpVAwDKQQRcERxlzmG2jGjzI3gDGjGjiYwmARvImMlcyBoAkIl4QDrEesjUx6wCUGKI1YoMAcI6NEW8AWYT7QsW9RlwyC6hfSVOYuBdcw8Ba3i4PszdEzzHD430jVK+/p8QFX/ANtGFh8NvnK1XE0xY3daRS0qTl6Lk5VGQEnS3dRDYbDvK+gtNRj8HTVHN2JGvhrqOmmspeO0rZwugUtYdL99bfE1T+rLjF1s9Cm49sID8WW/0MpdbSaO30+LjbmibjaUxh3OTcoLA2G/l4ygejS9FbIR5Hbu0v8A7t8pcdoG/s4HV/wF/wApTYn1AOv456g/AJJhvRGTHLp9FtgsKiPQCgmyX73lbYGR9p8LTFNnybOhIvprcH8Z201/rre4gHz/ANoztGmbDVP1R8b/AOsoqfI2rFKw618Io14WhxCLnfLUWoqKbWRgSdLDW/XfQSbs/UXDYlRXNk1K1ADkLH3xbuN1I3/BucumHcGzKQ1+hao4/wAsv6ZAd1IFiSwB8dSv1lqpoyw4ZraNpSa4DBrggEEagg7GTZtJV8Ia1NRyAIHkCR+UswJqntHFa4019GD9PWBeiFIdPbNicl9CvWUWJ4dUWqwpvkLozOGs2Z76P3tQxAIJG4Gs2nG2AqAjQ5Tc7G15ncS5bErf3EXXfvM2n7wma0q0dfB1jVN+RnZjh6ZaoZ2Y51JIA++JergqVrWbzvr+Mp+zL61B1CH6/wD6l4plLp7N8OKeJQcTo00xStkvdFe5+7c6fIReD0qaYrJkUesl9/VJXe33I/tEn9ZQbqCp8rqP4zmRyMRSf3rH4uMx+rzRU3JzvFK30XwCFiCig2sbDXfcSm7Q0WT0YQ5lzl2HMDba3825y3dv64jwt+9aU+Jq58SbaqtkHiACWHjoH+NpSG9m/qITlJdGh7FYogNTIIUm69M6qM6j4hz+qZrCZixXakFbmjZ2sLXObNUNvEF/nNkGBFxsdfhNFXI4M2NxS39CkyJjHExrSxiRsZExj2kbGAMaROZI5kTGAJeEZeEA7hHiQqZKpgEqmOkYMeDAFBheAhAKftbjDSwddx62Qov6TkILftX+EwZT0aYen7pUnzPeP1P0mi+0iufRUKQOtTEJfxVLsb/ErMzxDGk1EDra7DvfGZ32dvo2pptnfxVAWPVlFh1yhmNvGwK/rnrObhlUDD01c3NOuyWG9hmYf5ZJxskPQtqbOwsdyLFR8bAfGU3CUy1nRidHU3OU37jqCM5F9EQ6dZEzuey95H+VOfstOPcTpn0aEPzb677dGnMcUhqolmJzrfb2FUN+8jyHiLo+ICHYKiaGmPXOToffHyj+FVEfE5/dVn9ZPaOfkn32milKTmqqdPv5L6hxFfSuwS63C6+A/wBZHxriVP0LAhhmcD8D49DIcBWXvHqx9pwem4GX92cnaF09Gg6vfekdlI5gTOZWzpzVSjpkOErUwVTNa5TKTt6znoLamX+Pwzue46WtY6kEHKAHGhuRrp47zK8QpqGpsOvuN/zK1tUY9BNDiaKq7aixPvoOXQi/zEtklMp6e65NP6NfwYj0KC98pKk/G/5iXJNhMz2cAFI5SCPS8mDbqo3HlNJVOglp8HPl97MfxBGetn9kMRl11yg2Pjr+MqaiH+lAmw/4Z18Gv+UmfEuGbvgd5rbdfKZ/iqsa4djfub3RV0VzoWI+kpM7o68uRzjSS+i44DURKzozi/oxt4BD+UuW4hSHvH+fKZThtFVxZW473pF0zPszjdBb2Rzl6Ag/2Rf7xZpNytkYLpp9nP2m4hTCI4Vjlcj5gt1HQSrr8WTuWTVSoXU7h6ij2vuJO/jbIaDHXusp9dOZA5J4GVDYhMtM66MPb+9Tb3P+qZaUtGGR1za2aPEcVTO5CkMAcvTMLkc9tpUUqhphWN751vfe1w7H9xR5h5JXqK2e29mtc0yL5fIH5Tkx2IRaK5nzsARpubZHudNz6YnYbysz9HRkvjpV9GpxAzFgfa0P6wI/OX/ZjGekwyE+soyN5r/paZKpxJyxyKALJr+qOc7+w2Ob0lai3vOy/qPY/R1/ZkQtbM/U1ylPXwbQxjGKxjGmhxkbGRsY9pGxgETyMx7RhgDYQvCATI8mVpxo8nRoB0q0kBnOryRWgEt4sZeKIB5x9oWKP9OwqW0RS52tdyeR02Vd+spONVFshtbY6d3n01X5WkvaLFFuJu3JXCC+3dGT/L9Z3cbw6OgJWxtuJlVHoemhuXoqeIVXGJpEN3VyLroNdMw5H2ToZB2eqCriSH7pVMrb3IU9w635OfkJFgsQyVXDXyizX3ByLn7ym6n1ANRzj+zbXxL90DKgUWFgQMq7cj3TLt/p2YYp3lUv7O56FNcS5JbuWYfqDP1HuTr7PYales1icqhR8Lr1ldjm/tFb9B/8CpO3gj9yser2+ZkOnxNVinml/Jd4ChSyC6ddb+Mr+0ODpf1K3YAs3963Xxndg37onF2gbv0B0N/myTOafI6PUYp4r+yu4jw1WyZX5Idfi3h780VbB1CdHBBVfaPuiUOJf/hfo0/8On/GaSsbH5fUCWumZYMK5PT+C37O0WSm4Y3OdSNSeQ/hNBWOqjxmf7PPdX/SX8DLt3u6jwvLy9yc3qJ1kaMHUrvmbR929p9r+dpR8Sw1V6qkDdctzqdbjUm55zSenILajc8h9NJUcXe9Sjc9P7y8pSa/UdWbE+C7+Uc4wLf0lHZxq4539ezcyPfmj/7NRSbsT5TL4+oRkYHW1M//AA0/4TUGqbnXp9VBH4xdMenxLk1sjx+ApGjUFmPdv+zf70oqWFpFEsp9dRufaamOv/TmgD37p2busOoJF/KZTEYgoKmWwCOcmlyCpupvz1Y/yJMU2tDNhmb2/kt8dw+nZ8pYEh99tVNuszbUkFC9wdeWu60h6xAX2Btmmrd2K6k3y6+dunKZengkFC7vmN00XX2anO/3OsnFXnZX1eNLjxXku6WLU6gA3VbGwY7dXB/CLwriHo8cGOgNdEOi7VlKe6OZB+EXgbqKQKqBci19TYACcvE8QVq1msLpkcaDdQtvrE1+pmeTHXCT1powxwcEBhsQCPI6xrS5xkLSImSNIjAI2jCY9zIjACEZeEAYjSVGhCATK8mRoQgEitHhoQgHiXFal8VVb/1R/vtNPiTmpr8vwhCYX8Hr+j8Myoq2r1QOhAvzBRl+eonX2bGfE1iABop8O8WMSEu/aYT+5sk4gn9pcZhrSbrzouOnjJeD2yVBca1RyPS8SEh+0ym3+Rf2XuGAy+sN+hnFxxSatMAg5UU8+XmPCEJWPJv6jJXRy4vDsHpqRoCg3GwSkv8AlMsuI+lLDIRYEBgSRcZbA6dIQjIX9N23v6NL2XpkI1zc3Ck9Sqi5+suKb3qHwFoQmse1HH6j91mEqLdgRoQxBtudr6+RJ+Albxlzno38foywhMp9x6Gf9tf4cmOe6IPuU/8ADSaitTIK97dVG19QPOJCTfgzwe//AARC2cKTryPW0zOGo52dSfWrC/PQs5I/cEIRHhlvU++f6L6vSsrEtrlJO/IeUzKufQNytbbwWsf8whCJ8EZaba2XnCVy0KY+6D8/95x8SN6tcdUT8L/lCET7mM/sR6hwSrmw1ButKnfzyC862hCbHlMgcyImEIII2kTQhAI80IQgH//Z';

function CommentsSlider() {
  return (
    <div className="w-full min-h-screen lg:px-[50px] md:px-[30px] px-[15px] bg-[#3e3e3e]">
      <div className="pt-3 pb-24">
        <h2 className="text-4xl text-white font-bold text-center my-20">
          Don't take our word for it
        </h2>

        {/* slider */}
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          breakpoints={{
            // Define different settings for different screen widths
            640: {
              slidesPerView: 2, // For screens <= 640px wide, show 1 slide at a time
              spaceBetween: 10, // Add some space between slides
            },
            768: {
              slidesPerView: 2, // For screens <= 768px wide, show 2 slides at a time
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3, // For screens <= 1024px wide, show 3 slides at a time (original setting)
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            {/* <img src={image1} className='w-full h-[300px]'/> */}
            <div className="bg-white p-8 text-center mb-[60px] lg:w-[580px] md:w-ful w-full">
              <div className="flex gap-2 justify-center">
                <AiFillStar color="black" size={30} />
                <AiFillStar color="black" size={30} />
                <AiFillStar color="black" size={30} />
                <AiFillStar color="black" size={30} />
                <AiFillStar color="black" size={30} />
              </div>
              <p className="text-2xl mt-8 tracking-wider">
                Really pleased with the after sale service. Got my product
                assembled in one day!
              </p>
              <div className="flex justify-center items-center mt-8 mb-6">
                <div className="h-24 w-24 rounded-full overflow-hidden shadow-lg ">
                  <img src={url} className="object-cover w-full h-full" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Md. Jobayer Akanda</h3>
              <p>Developer, Web Dev</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={image1} className='w-full h-[300px]'/> */}
            <div className="bg-white p-8 text-center mb-[60px] lg:w-[580px] md:w-ful w-full">
              <div className="flex gap-2 justify-center">
                <AiFillStar color="black" size={30} />
                <AiFillStar color="black" size={30} />
                <AiFillStar color="black" size={30} />
                <AiFillStar color="black" size={30} />
                <AiFillStar color="black" size={30} />
              </div>
              <p className="text-2xl mt-8 tracking-wider">
                Really pleased with the after sale service. Got my product
                assembled in one day!
              </p>
              <div className="flex justify-center items-center mt-8 mb-6">
                <div className="h-24 w-24 rounded-full overflow-hidden shadow-lg ">
                  <img src={url} className="object-cover w-full h-full" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Md. Jobayer Akanda</h3>
              <p>Developer, Web Dev</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={image1} className='w-full h-[300px]'/> */}
            <div className="bg-white p-8 text-center mb-[60px] lg:w-[580px] md:w-ful w-full">
              <div className="flex gap-2 justify-center">
                <AiFillStar color="black" size={30} />
                <AiFillStar color="black" size={30} />
                <AiFillStar color="black" size={30} />
                <AiFillStar color="black" size={30} />
                <AiFillStar color="black" size={30} />
              </div>
              <p className="text-2xl mt-8 tracking-wider">
                Really pleased with the after sale service. Got my product
                assembled in one day!
              </p>
              <div className="flex justify-center items-center mt-8 mb-6">
                <div className="h-24 w-24 rounded-full overflow-hidden shadow-lg ">
                  <img src={url} className="object-cover w-full h-full" />
                </div>
              </div>
              <h3 className="text-2xl font-bold">Md. Jobayer Akanda</h3>
              <p>Developer, Web Dev</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default CommentsSlider;
