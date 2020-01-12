const stringify = data => console.log(JSON.stringify(data, null, 2));

module.exports.resolvers = {
  Query: {
    posts(parent, { query }, { prisma }, info) {
      const options = {};
      if (query) {
        options.where = {
          title_contains: query
        };
      }
      return prisma.query.posts(options, info);
    },
    post(parent, { id }, { prisma }, info) {
      return prisma.query.post({ where: { id } });
    }
  }
};
