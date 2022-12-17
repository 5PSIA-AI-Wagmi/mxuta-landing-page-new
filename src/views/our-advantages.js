import { BiTimer } from "react-icons/bi";
import { MdSavings } from "react-icons/md";
import { RiShieldCheckFill } from "react-icons/ri";

export default function OurAdvantages() {
  const advantages = [
    {
      icon: <MdSavings />,
      title: "Termurah",
      description:
        "Kami memberikan banyak penawaran dengan pilihan dan harga yang terbaik",
    },
    {
      icon: <RiShieldCheckFill />,
      title: "Aman",
      description:
        "Memiliki banyak testimoni dan berbagai macam metode pembayaran (E-Waller, QRIS, Virtual Account, Saldo Mxuta, Alfamart & Indomaret)",
    },
    {
      icon: <BiTimer />,
      title: "Cepat",
      description:
        "Proses Top dilakukan secara Otomatis/Instant (1 Menit) setelah melakukan pembayaran dan dapat dilakukan kapan saja (Open 24 Jam)",
    },
  ];

  const AdvantageCard = (props) => {
    const { icon, title, description } = props;

    return (
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="xs:w-12/12 md:w-6/12 lg:w-4/12 p-4"
      >
        <div className="bg-gray flex flex-col p-8 rounded-lg items-center h-full">
          <div className="bg-primary text-white p-5 rounded-full text-3xl">
            {icon}
          </div>

          <h6 className="font-bold text-2xl mx-2 my-4">{title}</h6>
          <p className="text-sm text-secondary text-center">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="items-center flex mt-64 md:mt-40 min-h-screen-75">
      <div className="container mx-auto items-center flex flex-wrap text-white">
        <div className="flex flex-col items-center w-full">
          <div data-aos="zoom-out-down">
            <h2 className="font-bold text-4xl text-center">
              Apakah Mxuta Store dapat dipercaya?
            </h2>

            <p className="text-lg leading-relaxed text-secondary text-center my-8 px-8 mb-16">
              Pasti! Mxuta Store merupakan store Top Up Games paling murah, aman
              dan terpercaya di Indonesia. Kami telah memiliki banyak pelanggan
              yang puas dan memiliki pengalaman yang baik pada saat melakukan
              transaksi di toko kami.
            </p>
          </div>

          <div className="w-full flex flex-row flex-wrap">
            {advantages.map((advantage, index) => (
              <AdvantageCard
                icon={advantage.icon}
                title={advantage.title}
                description={advantage.description}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
