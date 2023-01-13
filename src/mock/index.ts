import user from './user';

export default [
  ...user,
  {
    url: '/api/mock/user/facadeuser/list',
    method: 'post',
    response: (request: any) => {
      const { page } = request.body;
      const total = 20;
      return {
        code: 200,
        msg: 'success',
        data: {
          'list|10': [
            {
              index: `@increment(${page})`,
              orderNo: '@guid',
              amount: '@float(10, 1000, 2, 0)',
            },
          ],
          page,
          total,
        },
      };
    },
  },
  {
    url: '/api/mock/user/facadeuser/vote',
    method: 'post',
    response: () => {
      return {
        code: 200,
        msg: 'success',
        data: {
          'list|3': [
            {
              avatarUrl: '@image(200x200, @color, @color, @word)',
              percentage: '@integer(1, 100)',
              text: '@cname(3, 5)',
              ticket: '@integer(1, 100)',
            },
          ],
        },
      };
    },
  },
];
