import Link from "next/link";
import { FormEvent, useRef } from "react";
import { NewCustomProduct } from "../../../../components/newProduct/newCustomProduct";
import { NewStandarProduct } from "../../../../components/newProduct/newStandarProduct";
import Icons from "../../../../components/svgs";

type SectionProps = {
  children: React.ReactNode;
  title: string;
  onSubmit: () => {};
};

function Section(props: SectionProps) {
  const form = useRef<HTMLFormElement>();

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.onSubmit();
  }

  return (
    <div className="flex w-1/2 hover:shadow-lg  flex-col px-4 py-2 space-y-4">
      <div className="flex sticky top-0 py-1 justify-between bg-gray-600/75 backdrop-blur-md">
        <h2 className="text-xl   font-bold text-gray-200">{props.title}</h2>

        <button
          onClick={() => form.current?.submit()}
          className="text-xs font-bold text-white bg-green-400 rounded-md px-2 "
        >
          Publish
        </button>
      </div>

      <form ref={form as any} onSubmit={submit}>
        {props.children}
      </form>
    </div>
  );
}

export default function NewProduct() {
  return (
    <div className="fixed inset-0 flex items-center  justify-center w-full h-full">
      <div className="absolute w-full h-full bg-black bg-opacity-50"></div>
      <div className="max-w-3xl relative max-h-full my-5 flex flex-col   overflow-hidden w-full border border-gray-500/80 bg-gray-600 rounded-md">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-600">
          <h1 className="text-lg text-gray-300">New Product</h1>
          <Link href="/products" className="hover:bg-gray-700 p-1 rounded-md">
            <Icons.X className="w-6 h-6 text-gray-500" />
          </Link>
        </div>

        <div className="flex items-start  overflow-y-auto justify-evenly flex-1 divide-dashed divide-gray-500  divide-x-2">
          <Section title="Standar Product">
            <NewStandarProduct />
          </Section>
          <Section title="Custom Product">
            <NewCustomProduct />
          </Section>
          I
        </div>
      </div>
    </div>
  );
}
