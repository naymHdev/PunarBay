import PostAdForm from "@/components/modules/listings/PostAdForm";
import PBContainer from "@/components/ui/PBContainer";

const PostAdPage = () => {
  return (
    <>
      <section className="">
        <PBContainer maxWidth="7xl">
          <div>
            <h2 className=" text-3xl font-semibold">
              Sell Your Own Product Now
            </h2>
          </div>
          <div className=" w-full border-b border-neutral-300 py-4" />
          <PostAdForm />
        </PBContainer>
      </section>
    </>
  );
};

export default PostAdPage;
