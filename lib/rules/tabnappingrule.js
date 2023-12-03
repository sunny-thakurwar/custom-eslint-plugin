module.exports = {
  meta: {
    fixable: "code",
    schema: [],
    type: "suggestion",
    messages: {
      tabnappingError:
        "When using target='_blank', rel='noopener noreferrer' should be present",
    },
  },
  create(context) {
    return {
      JSXOpeningElement: function (node) {
        const isAnchorTag = node.name.name === "a";
        const hasTargetBlank = node.attributes.some(
          (attribute) =>
            attribute.name.name === "target" &&
            attribute.value.value === "_blank"
        );
        const hasRelNoopenerNoreferrer = node.attributes.some(
          (attribute) =>
            attribute.name.name === "rel" &&
            attribute.value &&
            attribute.value.value === "noopener noreferrer"
        );

        if (isAnchorTag && hasTargetBlank && !hasRelNoopenerNoreferrer) {
          context.report({
            node: node,
            messageId: "tabnappingError",
            fix: function (fixer) {
              return fixer.insertTextAfter(
                node.attributes[node.attributes.length - 1],
                ' rel="noopener noreferrer"'
              );
            },
          });
        }
      },
    };
  },
};
