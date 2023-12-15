import React from 'react'
import Image from 'next/image'

function Services() {
  return (
    <section id='choose' class="text-gray-600 body-font rounded-[17px]  w-[90%] m-auto mt-[3%] pt-12"

    >
      <h2 className="heading text-center text-[#fff] text-[18px] md:text-[25px] lg-a:text-[36px]">Why choose us</h2>
      <p className="para text-center text-[#fff] opacity-80 text-[18px]" >Creating product visuals is complex, time-consuming, expensive. We&apos;re changing that.</p>
      <div className="container px-5 py-24 mx-auto">

        <div className="flex flex-wrap lg:flex-nowrap -m-4 gap-5 px-[16px] sm:px-[30px]">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 bg-[white] rounded-[22px] border-[1px] border-[#E5E7EB] ">
            <div className="h-full text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="53" height="44" viewBox="0 0 53 44" fill="none">
                <rect y="32.5385" width="53" height="7" rx="3.5" transform="rotate(-37.8745 0 32.5385)" fill="#063C75" />
                <rect x="16.6484" y="38.3772" width="36.9099" height="4.87489" rx="2.43744" transform="rotate(-37.8745 16.6484 38.3772)" fill="#063C75" />
                <rect x="33" y="41.6241" width="22.1916" height="2.93097" rx="1.46548" transform="rotate(-37.8745 33 41.6241)" fill="#063C75" />
              </svg>

              <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" fill="none">
                <path d="M58.2308 41.4251H53.4681C52.7491 41.4251 52.1641 40.8411 52.1641 40.1222V36.4275C52.1641 35.7096 52.748 35.1246 53.4681 35.1246H58.2308C58.9487 35.1246 59.5337 35.7096 59.5337 36.4275C59.5337 37.0334 60.0244 37.5251 60.6314 37.5251C61.2384 37.5251 61.729 37.0334 61.729 36.4275C61.729 34.4989 60.1594 32.9292 58.2308 32.9292H56.9465V31.0533C56.9465 30.4474 56.4559 29.9557 55.8489 29.9557C55.2419 29.9557 54.7512 30.4474 54.7512 31.0533V32.9281H53.4681C51.5384 32.9281 49.9688 34.4978 49.9688 36.4264V40.1211C49.9688 42.0497 51.5384 43.6193 53.4681 43.6193H58.2308C58.9487 43.6193 59.5337 44.2044 59.5337 44.9222V48.6169C59.5337 49.3348 58.9498 49.9199 58.2308 49.9199H53.4681C52.7491 49.9199 52.1641 49.3348 52.1641 48.6169C52.1641 48.011 51.6734 47.5193 51.0664 47.5193C50.4605 47.5193 49.9688 48.011 49.9688 48.6169C49.9688 50.5455 51.5384 52.1163 53.4681 52.1163H54.7512V54.2523C54.7512 54.8593 55.2419 55.35 55.8489 55.35C56.4559 55.35 56.9465 54.8593 56.9465 54.2523V52.1163H58.2308C60.1594 52.1163 61.729 50.5466 61.729 48.6169V44.9222C61.7279 42.9936 60.1594 41.4251 58.2308 41.4251Z" fill="#063C75" />
                <path d="M98.7816 65.8633C95.0759 59.7153 89.2309 56.7615 83.6131 57.9437C82.5385 54.2314 82.0446 49.9692 81.532 45.4699C80.1829 33.6284 78.79 21.3852 65.9837 18.9626C62.0266 18.4972 60.8071 17.2931 60.8104 16.9067C60.8137 16.6477 61.6018 15.8179 64.0902 15.5709C69.2283 14.5984 70.5477 10.1397 71.1591 5.90602C71.2294 5.41756 70.9659 4.94118 70.5137 4.7436C61.7632 0.913877 52.8941 0.912779 44.1458 4.73153C43.6826 4.91813 43.3961 5.4 43.4696 5.90712C44.0843 10.1397 45.4048 14.5984 50.6384 15.5851C53.0302 15.8179 53.8183 16.6477 53.8216 16.9078C53.8249 17.2942 52.6065 18.4983 48.5737 18.9747C35.8431 21.3852 34.448 33.6295 33.1001 45.471C32.4107 51.518 31.739 57.2335 29.6556 61.555C27.8884 60.8163 26.0224 60.2598 23.9006 60.4529L21.4605 60.6692V58.5101C21.4605 56.4882 19.8151 54.8428 17.7932 54.8428H4.21414C2.19226 54.8428 0.546875 56.4882 0.546875 58.5101V94.3508C0.546875 96.3727 2.19226 98.018 4.21414 98.018H17.7932C19.8151 98.018 21.4605 96.3727 21.4605 94.3508V93.9732L27.817 93.409C31.3241 93.1016 34.8552 94.41 38.27 95.6789C41.3676 96.8304 44.5596 98.0169 47.7834 98.0169C48.1511 98.0169 48.5199 98.0016 48.8888 97.9686C55.8281 97.3616 72.068 87.1875 90.8719 75.4041C93.0321 74.0507 95.2153 72.683 97.4063 71.3154C99.2745 70.1518 99.8914 67.7063 98.7816 65.8633ZM35.2822 45.7191C36.5983 34.1597 37.8419 23.2413 48.9074 21.1426C53.3815 20.6168 56.0389 19.0252 56.018 16.8859C56.0038 15.4425 54.6394 13.7696 50.9513 13.414C47.6144 12.7817 46.4289 10.2813 45.7758 6.42631C53.4385 3.28811 61.1968 3.28811 68.8595 6.42631C68.2064 10.2813 67.0275 12.7817 63.7818 13.4008C59.9959 13.7696 58.6315 15.4425 58.6173 16.8859C58.5953 19.0252 61.2539 20.6168 65.6511 21.1316C76.7923 23.2413 78.0359 34.1597 79.352 45.718C79.8536 50.1284 80.3794 54.6683 81.5177 58.5946C81.3695 58.655 81.2191 58.7022 81.072 58.768L64.1747 66.6229C62.335 63.7064 59.3044 60.4969 53.7788 61.4386L38.3403 64.241C35.9419 64.4473 33.8574 63.4781 31.6566 62.4529C33.8871 57.7736 34.6061 51.6618 35.2822 45.7191ZM19.2663 94.3519C19.2663 95.163 18.6055 95.8238 17.7943 95.8238H4.21414C3.40188 95.8238 2.74219 95.163 2.74219 94.3519V58.5112C2.74219 57.7 3.40298 57.0392 4.21414 57.0392H17.7932C18.6055 57.0392 19.2652 57.7 19.2652 58.5112V60.8657V94.1708L19.2663 94.3519ZM96.2449 69.4548C94.0518 70.8225 91.8686 72.1913 89.7062 73.5458C71.9154 84.6936 55.1103 95.2234 48.6967 95.7843C45.5859 96.062 42.406 94.8765 39.0351 93.6241C35.7805 92.4134 32.4283 91.1687 28.8993 91.1687C28.4767 91.1687 28.0508 91.1873 27.6228 91.2246L21.4605 91.7713V62.8733L24.0949 62.6395C26.4197 62.4331 28.4844 63.3947 30.6699 64.4144C33.054 65.5263 35.5237 66.669 38.6257 66.4154L54.1608 63.601C58.7995 62.8085 61.121 65.6734 62.7895 68.5811L63.29 69.4548L64.234 71.0969C56.2299 75.6182 49.3531 78.4161 43.2402 79.6378C42.6453 79.7563 42.26 80.3348 42.3797 80.9297C42.4839 81.4522 42.9427 81.8122 43.4543 81.8122C43.5256 81.8122 43.598 81.8057 43.6705 81.7903C50.2619 80.472 57.6579 77.4194 66.2811 72.4569C66.8058 72.1551 66.9869 71.4833 66.6851 70.9586L65.2888 68.5251L81.9842 60.7636C87.2332 58.4058 93.2308 60.9063 96.9002 66.995C97.3964 67.8171 97.1011 68.9203 96.2449 69.4548Z" fill="#063C75" />
              </svg>

              <h2 className="text-[30px] text-[#1F2937] tracking-wider uppercase mt-10 mb-3">More money</h2>
              <p className=" text-[rgba(0,0,0,0.68)]">Products showcased with visuals can achieve a conversion rate of 1.5 to 4 times higher.Seize this opportunity for growth.</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 bg-[white] rounded-[22px] border-[1px] border-[#E5E7EB]">
            <div className="h-full text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="53" height="44" viewBox="0 0 53 44" fill="none">
                <rect y="32.5385" width="53" height="7" rx="3.5" transform="rotate(-37.8745 0 32.5385)" fill="#063C75" />
                <rect x="16.6484" y="38.3772" width="36.9099" height="4.87489" rx="2.43744" transform="rotate(-37.8745 16.6484 38.3772)" fill="#063C75" />
                <rect x="33" y="41.6241" width="22.1916" height="2.93097" rx="1.46548" transform="rotate(-37.8745 33 41.6241)" fill="#063C75" />
              </svg>

              <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 82" fill="none">
                <g clipPath="url(#clip0_0_164)">
                  <path d="M59.484 0C64.9607 0 70.1933 1.09047 74.9702 3.07609C79.9262 5.12682 84.3857 8.13781 88.1209 11.8731C91.8562 15.6002 94.859 20.0597 96.9179 25.0319C98.8954 29.8088 99.994 35.0414 99.994 40.5181C99.994 45.9949 98.9035 51.2275 96.9179 56.0044C94.8672 60.9603 91.8562 65.428 88.1209 69.1551C84.3938 72.8903 79.9343 75.8932 74.9621 77.952C70.1852 79.9295 64.9526 81.0281 59.4759 81.0281C53.9991 81.0281 48.7665 79.9377 43.9896 77.9602C39.0337 75.9095 34.5742 72.8985 30.8389 69.1632L30.8308 69.1551C27.0955 65.4198 24.0845 60.9603 22.0338 56.0044C21.3991 54.4663 20.8538 52.8876 20.4062 51.2682C21.2526 51.3496 22.1152 51.3902 22.9859 51.3902C24.6379 51.3902 26.2492 51.2438 27.8198 50.9589C28.0802 51.7402 28.365 52.5133 28.6743 53.2701C30.3588 57.339 32.8327 61.0091 35.9169 64.0852C38.993 67.1613 42.6632 69.6352 46.7321 71.3279C50.6463 72.9473 54.9594 73.8506 59.4759 73.8506C64.0005 73.8506 68.3054 72.9554 72.2197 71.3279C76.2886 69.6433 79.9587 67.1694 83.0348 64.0852C86.1109 61.0091 88.5848 57.339 90.2775 53.2701C91.8969 49.3558 92.8002 45.0428 92.8002 40.5263C92.8002 36.0017 91.905 31.6968 90.2775 27.7825C88.5929 23.7136 86.119 20.0434 83.0348 16.9673C79.9587 13.8912 76.2886 11.4173 72.2197 9.72468C68.3054 8.10526 63.9923 7.20196 59.4759 7.20196C54.9512 7.20196 50.6463 8.09712 46.7321 9.72468C46.3821 9.87116 46.0322 10.0258 45.6904 10.1804C44.3558 8.08084 42.7445 6.17659 40.8972 4.52462C41.9063 4.0038 42.9398 3.52367 43.9896 3.08423C48.7746 1.09047 54.0072 0 59.484 0ZM54.8292 21.256C54.8292 20.2631 55.2361 19.3598 55.8871 18.7088C56.5381 18.0578 57.4333 17.6509 58.4261 17.6509C59.4189 17.6509 60.3222 18.0578 60.9732 18.7088C61.6242 19.3598 62.0311 20.2631 62.0311 21.256V40.1519L76.1502 48.5257C76.9966 49.0303 77.5662 49.8278 77.8022 50.7229C78.0301 51.61 77.9243 52.5865 77.4197 53.441C76.9152 54.2873 76.1177 54.8569 75.2225 55.0929C74.3355 55.3208 73.359 55.215 72.5126 54.7105L56.6765 45.3357C56.1312 45.0346 55.6836 44.5952 55.3581 44.0744C55.0245 43.5291 54.8292 42.8862 54.8292 42.2027V21.256Z" fill="#063C75" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9639 2.08325C34.0974 2.08325 43.9279 11.9137 43.9279 24.0472C43.9279 36.1807 34.0974 46.0111 21.9639 46.0111C9.83047 46.0111 0 36.1725 0 24.0472C0 11.9137 9.83047 2.08325 21.9639 2.08325ZM12.2474 24.6331C12.5404 22.9242 14.4934 21.9721 16.0315 22.8998C16.1698 22.9811 16.3082 23.0788 16.4302 23.1927L16.4465 23.2009C17.1382 23.86 17.9113 24.5517 18.6763 25.2353L19.3354 25.8294L27.1396 17.6427C27.6034 17.1545 27.9452 16.8371 28.6451 16.6825C31.0376 16.1535 32.7221 19.0831 31.0295 20.8734L21.2966 31.0783C20.3771 32.0548 18.7414 32.1443 17.7567 31.2085C17.1952 30.6876 16.5767 30.1505 15.9582 29.6135C14.884 28.6776 13.7854 27.7255 12.8903 26.7815C12.3532 26.2444 12.1172 25.3655 12.2474 24.6331Z" fill="#38AE48" />
                </g>
                <defs>
                  <clipPath id="clip0_0_164">
                    <rect width="99.9974" height="81.02" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <h2 className="text-[30px] text-[#1F2937] tracking-wider uppercase mt-10 mb-3">more time</h2>
              <p className=" text-[rgba(0,0,0,0.68)]">Generate your visuals in just minutes rather than weeks.  No need for technical skills–simply click a button and access endless possibilities.</p>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4 bg-[white] rounded-[22px] border-[1px] border-[#E5E7EB]">
            <div className="h-full text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="53" height="44" viewBox="0 0 53 44" fill="none">
                <rect y="32.5385" width="53" height="7" rx="3.5" transform="rotate(-37.8745 0 32.5385)" fill="#063C75" />
                <rect x="16.6484" y="38.3772" width="36.9099" height="4.87489" rx="2.43744" transform="rotate(-37.8745 16.6484 38.3772)" fill="#063C75" />
                <rect x="33" y="41.6241" width="22.1916" height="2.93097" rx="1.46548" transform="rotate(-37.8745 33 41.6241)" fill="#063C75" />
              </svg>
              <svg className='m-auto' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" fill="none">
                <path d="M29.6845 3.125C27.1002 3.125 24.997 5.22812 24.997 7.8125V56.25H11.9203C10.6109 56.25 9.4623 57.0407 8.99668 58.2642C8.53105 59.4876 8.86389 60.8408 9.84201 61.7096L47.9218 95.5566C48.514 96.0832 49.2549 96.347 49.997 96.347C50.7392 96.347 51.4801 96.0832 52.0722 95.5566L90.149 61.7096C91.1287 60.8393 91.46 59.4876 90.9944 58.2642C90.5287 57.0407 89.3832 56.25 88.0738 56.25H74.997V7.8125C74.997 5.22812 72.8939 3.125 70.3095 3.125H29.6845ZM29.6845 6.25H70.3095C71.1705 6.25 71.872 6.95 71.872 7.8125V18.75H28.122V7.8125C28.122 6.95 28.8236 6.25 29.6845 6.25ZM34.372 9.375C33.5095 9.375 32.8095 10.0734 32.8095 10.9375V14.0625C32.8095 14.9266 33.5095 15.625 34.372 15.625C35.2345 15.625 35.9345 14.9266 35.9345 14.0625V10.9375C35.9345 10.0734 35.2345 9.375 34.372 9.375ZM42.1845 9.375C41.322 9.375 40.622 10.0734 40.622 10.9375V14.0625C40.622 14.9266 41.322 15.625 42.1845 15.625C43.047 15.625 43.747 14.9266 43.747 14.0625V10.9375C43.747 10.0734 43.047 9.375 42.1845 9.375ZM49.997 9.375C49.1345 9.375 48.4345 10.0734 48.4345 10.9375V14.0625C48.4345 14.9266 49.1345 15.625 49.997 15.625C50.8595 15.625 51.5595 14.9266 51.5595 14.0625V10.9375C51.5595 10.0734 50.8595 9.375 49.997 9.375ZM57.8095 9.375C56.947 9.375 56.247 10.0734 56.247 10.9375V14.0625C56.247 14.9266 56.947 15.625 57.8095 15.625C58.672 15.625 59.372 14.9266 59.372 14.0625V10.9375C59.372 10.0734 58.672 9.375 57.8095 9.375ZM65.622 9.375C64.7595 9.375 64.0595 10.0734 64.0595 10.9375V14.0625C64.0595 14.9266 64.7595 15.625 65.622 15.625C66.4845 15.625 67.1845 14.9266 67.1845 14.0625V10.9375C67.1845 10.0734 66.4845 9.375 65.622 9.375ZM28.122 21.875H71.872V57.8125C71.872 58.6766 72.572 59.375 73.4345 59.375H88.0738L49.997 93.222L11.9203 59.375H26.5595C27.422 59.375 28.122 58.6766 28.122 57.8125V21.875ZM49.997 26.5625C49.1345 26.5625 48.4345 27.2609 48.4345 28.125V32.8125H46.872C42.5642 32.8125 39.0595 36.3172 39.0595 40.625V43.75C39.0595 48.0578 42.5642 51.5625 46.872 51.5625H53.122C55.7064 51.5625 57.8095 53.6656 57.8095 56.25V59.375C57.8095 61.9594 55.7064 64.0625 53.122 64.0625H51.5595V54.6875C51.5595 53.8234 50.8595 53.125 49.997 53.125C49.1345 53.125 48.4345 53.8234 48.4345 54.6875V64.0625H46.872C44.2877 64.0625 42.1845 61.9594 42.1845 59.375C42.1845 58.5109 41.4845 57.8125 40.622 57.8125C39.7595 57.8125 39.0595 58.5109 39.0595 59.375C39.0595 63.6828 42.5642 67.1875 46.872 67.1875H48.4345V71.875C48.4345 72.7391 49.1345 73.4375 49.997 73.4375C50.8595 73.4375 51.5595 72.7391 51.5595 71.875V67.1875H53.122C57.4299 67.1875 60.9345 63.6828 60.9345 59.375V56.25C60.9345 51.9422 57.4299 48.4375 53.122 48.4375H51.5595V39.0625C51.5595 38.1984 50.8595 37.5 49.997 37.5C49.1345 37.5 48.4345 38.1984 48.4345 39.0625V48.4375H46.872C44.2877 48.4375 42.1845 46.3344 42.1845 43.75V40.625C42.1845 38.0406 44.2877 35.9375 46.872 35.9375H53.122C55.7064 35.9375 57.8095 38.0406 57.8095 40.625C57.8095 41.4891 58.5095 42.1875 59.372 42.1875C60.2345 42.1875 60.9345 41.4891 60.9345 40.625C60.9345 36.3172 57.4299 32.8125 53.122 32.8125H51.5595V28.125C51.5595 27.2609 50.8595 26.5625 49.997 26.5625Z" fill="#063C75" />
              </svg>

              <h2 className="text-[30px] text-[#1F2937] tracking-wider uppercase mt-10 mb-3">less costs</h2>
              <p className=" text-[rgba(0,0,0,0.68)]">Say goodbye to costly photoshoots and 3D modeling.  Enjoy a solution that&apos;s 70-95% more affordable than any other option available in the market.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
