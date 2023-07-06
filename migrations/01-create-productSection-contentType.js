module.exports = function(migration) {
    //content type
    const productSection = migration
    .createContentType("gatsbySection")
    .name("Gatsby Section")
    .description("Single product content type")
    .displayField("title");

    // create fields

    const internalName = productSection
    .createField("internalName")
    .name("Internal Name")
    .type("Symbol");
    

    const title = productSection
    .createField("title")
    .name("Title")
    .type("Symbol")
    .required(true);

    const products = productSection
    .createField("products")
    .name("Products")
    .type("Array")
    .items({
        type: "Link",
        linkType: "Entry",
        validations: [{linkContentType: ["recipe"]}]
    })



}