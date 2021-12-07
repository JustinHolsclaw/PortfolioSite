const Project = () => {
  const projects = [
    {
      title: "Cooking with Justin API",
      description: "This is the API I created for my future cooking website.",
      logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.fIMMzBFJZ6SfJVP7mqciWgHaF7%26pid%3DApi&f=1",
    },
    {
      title: "Huffman Encoding Algorithm",
      description: "This is an example of the Huffman Encoding Algorithm.",
      logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fteepublic%2Fimage%2Fprivate%2Fs--TwCcIoc_--%2Ft_Resized%2520Artwork%2Fc_fit%2Cg_north_west%2Ch_954%2Cw_954%2Fco_000000%2Ce_outline%3A48%2Fco_000000%2Ce_outline%3Ainner_fill%3A48%2Fco_ffffff%2Ce_outline%3A48%2Fco_ffffff%2Ce_outline%3Ainner_fill%3A48%2Fco_bbbbbb%2Ce_outline%3A3%3A1000%2Fc_mpad%2Cg_center%2Ch_1260%2Cw_1260%2Fb_rgb%3Aeeeeee%2Fc_limit%2Cf_jpg%2Ch_630%2Cq_90%2Cw_630%2Fv1520050660%2Fproduction%2Fdesigns%2F2416585_0.jpg&f=1&nofb=1",
    },
  ];
  return (
    <>
      {projects.map((project) => (
        <div className="row border border-">
          <img
            className="col-4 img-thumbnail h-100 rounded p-0"
            src={project.logo}
            alt=""
          ></img>
          <div className="col">
            <p className="h5 row">
              <strong>{project.title}</strong>
            </p>
            <p className="row">{project.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Project;
