import Link from 'next/link';
function HomePage() {
  return(
    <div class= "bg-[#FFFFFF]">
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet"></link>
        <Link href="#"><a class= "absolute text-[16px] text-[#2D3748] font-[Inter] lg:mt-[30px] lg:ml-[136px] mt-[10px] ml-[32px]">Home</a></Link>
        <Link href="#"><a class= "absolute text-[16px] font-[Work+Sans] font-bold font-[700] lg:mt-[31.5px] lg:ml-[214px] mt-[11.5px] ml-[110px] text-[#ED8936] leading-[21px]">Kontak Kami</a></Link>
        <img class="absolute lg:mt-[39.19px] lg:ml-[196.59px] mt-[19.19px] ml-[92.59px]" src ="/panah.svg"/>
        
        <h1 class= "absolute text-[48px] font-[Work+Sans] font-bold font-[700] lg:mt-[87px] lg:ml-[120px] mt-[68px] ml-[16px] text-[#2D3748] leading-[57.6px]">Kontak Kami</h1>
        <img class="absolute lg:w-[359px] lg:h[359px] lg:mt-[168px] lg:ml-[120px] w-[360px] h-[360px] mt-[219px] ml-[20px]" src ="/peta.svg"/>
        <img class="absolute h-[50px] w-[50px] lg:mt-[546px] lg:ml-[118px] mt-[603px] ml-[19px]" src ="/location.svg"/>
        <p class= "absolute text-[14px] text-[#2D3748] font-[Inter] font-[500] lg:mt-[546px] lg:ml-[176px] mt-[603px] ml-[77px]">Satria Building 2nd Lt 2 Unit A204-A206,<br></br>Jl. Akses UI No.24-26, Tugu, Kec. Cimanggis,<br></br>Kota Depok, Jawa Barat Depok Jawa Barat,<br></br>16451 Indonesia</p>
        <Link href="#"><a class="absolute h-[32px] w-[169px] lg:mt-[639px] lg:ml-[176px] mt-[696px] ml-[77px] rounded-[4px] border-[1px] border-[#ED8936]"></a></Link>
        <Link href="#"><a class= "absolute text-[14px] font-[Work+Sans] font-bold font-[700] lg:mt-[645.99px] lg:ml-[188px] mt-[702.99px] ml-[89px] text-[#ED8936] leading-[18.2px]">Lihat di Google Maps</a></Link>

        <img class="absolute lg:w-[36px] lg:h-[36px] lg:mt-[172px] lg:ml-[505px] w-[24px] h-[24px] mt-[135px] ml-[17px]" src ="/call.svg"/>
        <p class= "absolute text-[14px] text-[#2D3748] font-[Inter] font-[500] lg:mt-[179px] lg:ml-[549px] mt-[136px] ml-[47px]">+62 851-5995-4161</p>
        <img class="absolute lg:mt-[168px] lg:ml-[709px] w-[2px] h-[44px]" src ="/vertikal.svg"/>
        <img class="absolute lg:w-[36px] lg:h-[36px] lg:mt-[172px] lg:ml-[734px] w-[24px] h-[24px] mt-[171px] ml-[17px]" src ="/mail.svg"/>
        <p class= "absolute text-[14px] text-[#2D3748] font-[Inter] font-[500] lg:mt-[179px] lg:ml-[778px] mt-[172px] ml-[47px]">customer@sabilamall.co.id</p>
        <img class="absolute lg:mt-[236px] lg:ml-[503px] w-[455px] h-[2px]" src ="/horizontal.svg"/>

        <h2 class= "absolute text-[24px] font-[Work+Sans] font-bold font-[700] lg:mt-[262px] lg:ml-[503px] mt-[1312px] ml-[16px] text-[#2D3748] leading-[31.2px]">Tinggalkan Pesan</h2>
        <div class="absolute lg:h-[40px] lg:w-[455px] lg:mt-[317px] lg:ml-[503px] h-[43px] w-[368px] mt-[1367px] ml-[16px] rounded-[4px] border-[1px] border-[#E2E8F0]"></div>
        <img class="absolute lg:w-[24px] lg:h-[24px] lg:mt-[325px] lg:ml-[515px] w-[24px] h-[24px] mt-[1377px] ml-[28px]" src ="/people.svg"/>
        <input class="absolute lg:w-[380px] lg:h-[21px] lg:mt-[327.99px] lg:ml-[563px] text-[14px] font-[Inter] text-[#A0AEC0] font-[500] mt-[1377.99px] ml-[76px] w-[290px] h-[21px]" type="text" name="name" placeholder="Nama Anda"></input>

        <div class="absolute lg:h-[40px] lg:w-[455px] lg:mt-[373px] lg:ml-[503px] h-[43px] w-[368px] mt-[1423px] ml-[16px] rounded-[4px] border-[1px] border-[#E2E8F0]"></div>
        <img class="absolute lg:w-[24px] lg:h-[24px] lg:mt-[381px] lg:ml-[515px] w-[24px] h-[24px] mt-[1432.5px] ml-[28px]" src ="/alamat.svg"/>
        <input class="absolute lg:w-[380px] lg:h-[21px] lg:mt-[383.99px] lg:ml-[563px] text-[14px] font-[Inter] text-[#A0AEC0] font-[500] mt-[1433.99px] ml-[76px] w-[290px] h-[21px]" type="text" name="name" placeholder="Alamat email Anda"></input>

        <div class="absolute lg:h-[40px] lg:w-[455px] lg:mt-[429px] lg:ml-[503px] h-[43px] w-[368px] mt-[1479px] ml-[16px] rounded-[4px] border-[1px] border-[#E2E8F0]"></div>
        <img class="absolute lg:w-[24px] lg:h-[24px] lg:mt-[438.5px] lg:ml-[515px] w-[24px] h-[24px] mt-[1490px] ml-[28px]" src ="/nomortelepon.svg"/>
        <input class="absolute lg:w-[380px] lg:h-[21px] lg:mt-[439.99px] lg:ml-[563px] text-[14px] font-[Inter] text-[#A0AEC0] font-[500] mt-[1489.99px] ml-[76px] w-[290px] h-[21px]" type="text" name="name" placeholder="Nomor telepon Anda"></input>

        <textarea id="message" rows="5" class="absolute lg:w-[455px] lg:h-[120.5px] lg:h-[120.5px] lg:w-[455px] lg:mt-[485px] lg:ml-[503px] text-[14px] font-[Inter] text-[#A0AEC0] font-[500] p-[14px] mt-[1535px] ml-[16px] w-[368px] h-[120.5px] rounded-[4px] border-[1px] border-[#E2E8F0]" placeholder="Masukkan pesan Anda di sini"></textarea>

        <Link href="#"><a class="absolute lg:h-[40px] lg:w-[167px] lg:mt-[620px] lg:ml-[791px] lg:mb-[94px] h-[40px] w-[368px] mt-[1675px] ml-[16px] rounded-[6px] bg-[#E53E3E]"></a></Link>
        <Link href="#"><a class= "absolute text-[16px] font-[Work+Sans] font-bold font-[700] lg:mt-[629.49px] lg:ml-[853px] mt-[1684.49px] ml-[178.75px] text-[#FFFFFF] leading-[20.8px]">Kirim</a></Link>

        <img class="absolute lg:w-[260px] lg:h-[403px] lg:mt-[159px] lg:ml-[983px] w-[260px] h-[403px] mt-[752px] ml-[70px]" src ="/Mascot.svg"/>
        <h2 class= "absolute text-[24px] font-[Work+Sans] font-bold font-[700] lg:mt-[578px] lg:ml-[980px] mt-[1172px] ml-[66px] text-[#2D3748] leading-[31.2px]">Follow SabilaMall yuk!</h2>

        <Link href="#"><a><img class="absolute lg:mt-[617px] lg:ml-[1026px] w-[36px] h-[36px] mt-[1211px] ml-[112px]" src ="/facebook.svg"/></a></Link>
        <Link href="#"><a><img class="absolute lg:mt-[617px] lg:ml-[1070px] w-[36px] h-[36px] mt-[1211px] ml-[156px]" src ="/twitter.svg"/></a></Link>
        <Link href="#"><a><img class="absolute lg:mt-[617px] lg:ml-[1114px] w-[36px] h-[36px] mt-[1211px] ml-[200px]" src ="/instagram.svg"/></a></Link>
        <Link href="#"><a><img class="absolute lg:mt-[617px] lg:ml-[1158px] w-[36px] h-[36px] mt-[1211px] ml-[244px]" src ="/linkedin.svg"/></a></Link>
    </div>
  );
};

export default HomePage