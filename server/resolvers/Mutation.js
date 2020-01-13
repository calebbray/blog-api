module.exports = {
  Mutation: {
    createPost(parent, args, { prisma }, info) {
      return prisma.mutation.createPost({ args }, info);
    },
    updatePost(parent, { id, ...rest }, { prisma }, info) {
      return prisma.mutation.updatePost(
        {
          where: {
            id
          },
          data: rest.data
        },
        info
      );
    },
    async deletePost(parent, { id }, { prisma }, info) {
      await prisma.mutation.deletePost({ where: { id } });
      return {
        message: `Deleted post with an id of ${id}`
      };
    }
  }
};
