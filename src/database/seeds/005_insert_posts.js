
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('posts').del().then(function () {
    // Inserts seed entries
    return knex('posts').insert([
      { title: 'post-01', content: 'conteudo do post-01' },
      { title: 'post-02', content: 'conteudo do post-02' },
      { title: 'post-03', content: 'conteudo do post-03' },
      { title: 'post-04', content: 'conteudo do post-04' }
    ]);
  });
};
