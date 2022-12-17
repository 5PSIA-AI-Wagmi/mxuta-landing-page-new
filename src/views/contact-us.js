export default function ContactUs() {
  return (
    <section className="items-center flex min-h-screen-75">
      <div className="container mx-auto items-center justify-center md:justify-between flex flex-row flex-wrap text-white">
        <img
          data-aos="fade-up-right"
          className="ml-8"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F70%2F7f%2F5b%2F707f5bf0b3d143b6f18198e1d86c19fa.png&f=1&nofb=1&ipt=bded317a63ffaaa722a80fecc8d210f45d4098e787b307c46601b83e9b72925d&ipo=images"
          alt="gatot-kaca"
          style={{ width: "15rem" }}
        />

        <div data-aos="zoom-in" className="flex flex-col items-center mx-8">
          <h6 className="font-bold text-3xl text-center mb-2">
            Masih Bingung dalam Melakukan Transaksi?
          </h6>

          <h6 className="text-3xl text-center">
            Terdapat Kendala dalam Melakukan Transaksi?
          </h6>

          <p className="text-lg leading-relaxed text-secondary text-center my-4 px-8 mb-6">
            Jangan malu dan sungkan untuk hubungi CS kami
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=62895385155929&text&type=phone_number&app_absent=0"
            target="_blank"
            className="text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-primary uppercase text-md shadow hover:shadow-lg ease-linear transition-all duration-150"
            rel="noreferrer"
          >
            Hubungi CS
          </a>
        </div>

        <img
          data-aos="fade-up-left"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F22ba8af1-9afe-4a42-8798-aa2a150683e0%2Fdcaqpi7-d02f3c87-1f5a-4db0-a27e-8bb4ae5c98f7.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIyYmE4YWYxLTlhZmUtNGE0Mi04Nzk4LWFhMmExNTA2ODNlMFwvZGNhcXBpNy1kMDJmM2M4Ny0xZjVhLTRkYjAtYTI3ZS04YmI0YWU1Yzk4ZjcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.h2m6lOAwnq81p3v2mWJ7M4pPTplEEC8Sbz6T3qETxoI&f=1&nofb=1&ipt=762a396ca811a3bff34977a236f1d0177dd56829b894015591253c7b5933d8a1&ipo=images"
          alt="hanabi"
          style={{ width: "19rem" }}
        />
      </div>
    </section>
  );
}
