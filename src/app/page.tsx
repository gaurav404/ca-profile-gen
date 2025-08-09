import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-center">
      <div className="flex justify-center">
        <Image
          src="/profile.png"
          alt="CA Rishab Agarwala"
          width={180}
          height={180}
          className="rounded-full mb-6"
        />
      </div>
      <h1 className="text-4xl font-bold">
        Rishab Agarwala, Chartered Accountant
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Trusted Chartered Accountant based in Guwahati, Assam. Providing expert
        financial, taxation, and compliance services.
      </p>
    </div>
  );
}
