import prisma from '@repo/database';

export default async function IndexPage() {
  const users = await prisma.user.findMany();
  console.log(users);
  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
