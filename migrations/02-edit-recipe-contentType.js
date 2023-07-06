module.exports = function(migration) {
    const recipe = migration.editContentType("recipe");

    recipe.editField("method")
        .validations([
            {
                enabledMarks: ["bold", "italic", "code"]
            },
            {
                enabledNodeTypes: ["heading-1", "hyperlink", "ordered-list"]
            }
        ])
}