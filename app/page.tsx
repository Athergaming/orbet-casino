import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="h-[100px] w-full justify-start px-[172px] pt-[25px] absolute top-0 z-10">
        <div className="flex items-center flex-row gap-4">
          <Image
              src="/images/logo/orbet-logo.webp"
              alt="logo"
              width={50}
              height={50}
              className="rounded-lg"
              priority
          />
          <p className="font-proxima text-[20.7px] text-white font-semibold">
            Orbet
          </p>
        </div>
      </div>
      <div className="absolute z-[-1] inset-x-0 bottom-0 h-[75vh] before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-[100px] before:bg-gradient-to-b before:from-black before:to-transparent before:z-10">
          <Image
            src="/images/bg/coming-soon.jpeg"
            alt="coming-soon"
            fill
            priority
            className="object-cover"
          />
      </div>
      <p className="font-rubik text-[4rem] md:text-[116px] font-[600] text-white absolute top-[23%] right-1/2 transform translate-x-1/2 z-10 w-full text-center tracking-normal">
          COMING SOON
      </p>
      <Image
            src="/images/decals/alien-ship.svg"
            alt="alien-ship"
            width={350}
            height={350}
            quality={100}
            className="absolute top-[50px] right-[50.3%] transform translate-x-1/2 z-0"
        />
        <Image
          src="/images/decals/shining-light-left.png"
          alt="light-left"
          width={750}
          height={750}
          quality={100}
          className="absolute top-[0] left-0"
        />
      <Image
          src="/images/decals/shining-light-right.png"
          alt="light-right"
          width={750}
          height={750}
          quality={100}
          className="absolute top-[0] right-0"
        />
        <div className="w-full h-[136px] overflow-hidden absolute bottom-0 bg-[#040E0D]/[0.68] border-white/[0.2] border-t-[1px]">
          <div className="relative w-full">
            <div className="absolute top-0 left-0 flex items-center justify-center">
              <Image
                src={'/images/decals/dotted-green-bg-left.svg'}
                alt="dots-pattern-1"
                width={600}
                height={300}
                className="relative z-10"
                priority
              />
            </div>
            <div className="absolute top-0 right-0 flex items-center justify-center">
              <Image
                src={'/images/decals/dotted-green-bg-right.svg'}
                alt="dots-pattern-2"
                width={600}
                height={300}
                className="relative z-10"
                priority
              />
            </div>
          </div>
          <div className="z-50 flex flex-wrap justify-center items-center pb-[25px] w-full h-full">
            <div className="flex flex-row gap-[22px]">
              <div className="flex-col gap-[4px] w-[235px]">
                <p className="text-[#F2F2F2] font-rubik text-[16px] font-[400] opacity-[0.8]">
                  Contact Support:
                </p>
                <p className="text-[#ECECEC] font-rubik text-[20px] font-[600]">
                  support@orbet.gg
                </p>
              </div>
              <div className="flex-col gap-[4px] w-[235px]">
                <p className="text-[#F2F2F2] font-rubik text-[16px] font-[400] opacity-[0.8]">
                  Marketing Inquiries:
                </p>
                <p className="text-[#ECECEC] font-rubik text-[20px] font-[600]">
                  marketing@orbet.gg
                </p>
              </div>
            </div>
            <div className="bg-[#0D1D1D]/[0.81] ml-0 md:ml-[50px] w-[284px] h-[72px] z-50 rounded-[16px] border-t-[2px] border-[#43DB50] relative flex justify-center items-center overflow-hidden">
              <div className="h-[48px] w-[260px] flex justify-between items-center">
                <div className="gap-[16px] flex flex-row">
                  <div className="h-[48px] w-[48px] border-1 border-[#3C6246] rounded-[8px] flex justify-center items-center text-[#D6D6D6]">
                    <FaXTwitter size={20} />
                  </div>
                  <div className="font-rubik gap-[2px]">
                    <p className="text-[#F2F2F2] text-[16px] font-[400]">
                      Follow our
                    </p>
                    <p className="text-[#F2F2F2] text-[16px] font-[600]">
                      X / Twitter
                    </p>
                  </div>
                </div>
                <div className="inline-flex p-[1.1px] rounded-[8px] rotate-[-0.65deg] bg-gradient-to-br from-[#47CF47] to-[#2BC251]">
                  <Button
                    variant="ghost"
                    className="w-[79px] h-[32px] px-[22px] py-[7.33px] rounded-[8px] bg-gradient-to-br from-[#47AD2E] to-[#008135] text-white text-[10px] font-[500] font-rubik"
                  >
                    Follow now
                  </Button>
                </div>
              </div>
              <div className="absolute top-[-20px] left-[-46px] flex items-center justify-center rounded-full overflow-hidden h-[149px] w-[128px]">
                <Image
                  src={'/images/decals/dotted-green-bg-left-button.svg'}
                  alt="dots-pattern-2"
                  fill
                  className="relative z-10 scale-[1.5]"
                  priority
                />
              </div>
              <div className="absolute top-0 right-[-5px] flex items-center justify-center rounded-full overflow-hidden h-[149px] w-[128px]">
                <Image
                  src={'/images/decals/dotted-bg-button.svg'}
                  alt="dots-pattern-2"
                  fill
                  className="relative z-10]"
                  priority
                />
              </div>
            </div>
            <div className="bg-[#0D1D1D]/[0.81] ml-0 md:ml-[25px] w-[284px] h-[72px] z-50 rounded-[16px] border-t-[2px] border-[#43DB50] relative flex justify-center items-center overflow-hidden">
              <div className="h-[48px] w-[260px] flex justify-between items-center">
                <div className="gap-[16px] flex flex-row">
                  <div className="h-[48px] w-[48px] border-1 border-[#3C6246] rounded-[8px] flex justify-center items-center text-[#D6D6D6]">
                    <FaDiscord size={20} />
                  </div>
                  <div className="font-rubik gap-[2px]">
                    <p className="text-[#F2F2F2] text-[16px] font-[400]">
                      Join our
                    </p>
                    <p className="text-[#F2F2F2] text-[16px] font-[600]">
                      Discord
                    </p>
                  </div>
                </div>
                <div className="inline-flex p-[1.1px] rounded-[8px] rotate-[-0.65deg] bg-gradient-to-br from-[#47CF47] to-[#2BC251]">
                  <Button
                    variant="ghost"
                    className="w-[79px] h-[32px] px-[22px] py-[7.33px] rounded-[8px] bg-gradient-to-br from-[#47AD2E] to-[#008135] text-white text-[10px] font-[500] font-rubik"
                  >
                    Join now
                  </Button>
                </div>
              </div>
              <div className="absolute top-[-20px] left-[-46px] flex items-center justify-center rounded-full overflow-hidden h-[149px] w-[128px]">
                <Image
                  src={'/images/decals/dotted-green-bg-left-button.svg'}
                  alt="dots-pattern-2"
                  fill
                  className="relative z-10 scale-[1.5]"
                  priority
                />
              </div>
              <div className="absolute top-0 right-[-5px] flex items-center justify-center rounded-full overflow-hidden h-[149px] w-[128px]">
                <Image
                  src={'/images/decals/dotted-bg-button.svg'}
                  alt="dots-pattern-2"
                  fill
                  className="relative z-10]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
