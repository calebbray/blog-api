module.exports = {
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
      return prisma.query.post({ where: { id } }, info);
    }
  }
};
