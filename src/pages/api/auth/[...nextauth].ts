import NextAuth from "next-auth/next"
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  // Configure one or more authentication providers
  providers:[
    GithubProvider({
        clientId:process.env.GITHUB_ID as string,
        clientSecret:process.env.GITHUB_SECRET as string,
    }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID as string,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
    // })
],
}

export default NextAuth(authOptions)
