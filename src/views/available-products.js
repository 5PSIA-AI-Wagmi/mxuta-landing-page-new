export default function AvailableProducts() {
  const availableProducts = [
    {
      imageURL: "https://mxutastore.my.id/img/category/mobile_legends.jpg",
      title: "Mobile Legends",
      link: "https://mxutastore.my.id/order/mobilelegends",
    },
    {
      imageURL: "https://mxutastore.my.id/img/category/free_fire.jpg",
      title: "Free Fire",
      link: "https://mxutastore.my.id/order/freefire",
    },
    {
      imageURL: "https://mxutastore.my.id/img/category/mobile_legends_gift.jpg",
      title: "Mobile Legends Gift",
      link: "https://mxutastore.my.id/order/mobilelegendsgift",
    },
    {
      imageURL:
        "https://mxutastore.my.id/img/category/mobile_legends_joki_rank.png",
      title: "Mobile Legends Joki Rank",
      link: "https://mxutastore.my.id/order/mobilelegendsjokirank",
    },
  ];

  const AdvantageCard = (props) => {
    const { imageURL, title, link } = props;

    return (
      <div data-aos="flip-right" className="xs:w-6/12 md:w-4/12 lg:w-24/12 p-4">
        <div className="bg-gray flex flex-col p-4 rounded-lg h-full">
          <img className="f-full w-full rounded" src={imageURL} alt={title} />

          <h6 className="font-bold text-xl mx-2 my-4">{title}</h6>

          <div className="flex items-end justify-end h-full">
            <a
              href={link}
              className="text-white font-bold px-4 py-2 rounded outline-none focus:outline-none bg-blueGray-700 active:bg-blueGray-600 text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              target="_blank"
              rel="noreferrer"
            >
              Lihat Produk
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="items-center flex mt-24 md:mt-40">
      <div className="container mx-auto items-center flex flex-wrap text-white">
        <div className="flex flex-col w-full">
          <h2 data-aos="zoom-in-right" className="text-4xl mb-4 md:mb-8 ml-4">
            Produk yang tersedia
          </h2>

          <div className="w-full flex flex-row flex-wrap t">
            {availableProducts.map((product, index) => (
              <AdvantageCard
                imageURL={product.imageURL}
                title={product.title}
                link={product.link}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
