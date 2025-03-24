import Image from "next/image";
import Link from "next/link";
import React from "react";
interface OpeningHomeProps {
  onPlay: () => void;
}

const OpeningHome = ({ onPlay }: OpeningHomeProps) => {
  return (
    <>
      <section className="opening-hero-bg flex items-center h-screen">
        <div className="container">
          <div className="flex flex-col">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                height={400}
                width={400}
              />
            </Link>
            <h5 className="text-white text-title font-bold">
              E tū nei mātou ki te tiaki, te whakamaru, me te whakatairanga i
              ngā taonga tuku iho a ngā iwi Māori – ngā otaota, ngā kararehe, me
              ngā mātauranga e pā ana ki te whenua me te moana, i runga i te
              mana o He Wakaputanga 1835 me Te Tiriti o Waitangi 1840.
            </h5>
            <p className="text-white mt-4">
              Welcome to Tiaki Taonga Trust Wai 262. We stand to protect,
              preserve, and promote the cultural heritage of Māori, including
              flora, fauna, and traditional knowledge, guided by the principles
              of He Wakaputanga 1835 and Te Tiriti o Waitangi 1840.
            </p>
          </div>
          <div className="flex justify-between mt-14">
            <div className="flex flex-col">
              <h6 className="text-white font-bold text-md">
                Wai 262 Flora and Fauna Website Entry
              </h6>
              <p className="text-white text-md">Press play to proceed</p>
            </div>
            <span
              onClick={onPlay}
              className="ic-play text-xl bg-white rounded-full hover:text-primary cursor-pointer hover:bg-card transition-all duration-700"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OpeningHome;
