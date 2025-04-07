"use client";
import { Metadata } from "next";
import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInFormSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { title } from "process";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface SignInPageProps {}

const SignInpage: FC<SignInPageProps> = ({}) => {
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
  });

  const { toast } = useToast();

  const router = useRouter();

  const onSubmit = async (val: z.infer<typeof signInFormSchema>) => {
    const authenticated = await signIn("credentials", {
      ...val,
      redirect: false,
    });
    if (authenticated?.error) {
      toast({
        title: "Error",
        description: "Email or Password may be wrong.",
      });
      return;
    }
    await router.push("/");
  };
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="border border-border p-5">
          <div className="font-semibold text-center text-2xl mb-2">
            Login to your account
          </div>
          <div className="text-sm text-gray-500">
            Enter your credentials to access dashboard
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-5 space-y-5"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-Mail</FormLabel>
                    <FormControl>
                      <Input
                        className="w-[450px]"
                        placeholder="E-Mail"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="w-[450px]"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button size="lg" className="w-full">
                Sign in
              </Button>
              <div className="text-sm">
                Don't have an account?{" "}
                <Link href="/auth/signup" className="text-primary">
                  Sign Up
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignInpage;
