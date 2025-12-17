import Header from "@/components/organisms/Header";
import TitleRedirect from "@/components/molecules/TitleRedirect";
import Section from "@/components/templates/Section";
import CardContainerHorizontal from "@/components/organisms/CardContainerHorizontal";
import Carousel from "@/components/organisms/Carousel";
import Logo from "@/components/molecules/Logo";
import LogoLarge from "@/components/molecules/LogoLarge";
import CustomInput from "@/components/atoms/CustomInput";

export default function HomePage() {
  return (
    <main className="box-border flex h-full w-full flex-col items-center justify-evenly px-6">
      <LogoLarge />
      <div className="flex w-full flex-col gap-4">
        <form className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-2">
            <CustomInput
              id="loginEmail"
              name="nameLoginEmail"
              placeholder="E-mail"
              type="email"
              style="empty"
            />
            <CustomInput
              id="loginPassword"
              name="nameLoginPassword"
              placeholder="Senha"
              type="password"
              style="empty"
            />
          </div>
          <div>
            <CustomInput
              id="loginSubmit"
              name="nameLoginSubmit"
              value="Entrar"
              type="submit"
              style="tint"
            />
          </div>
        </form>
        <hr className="border-text border" />
        <div className="flex w-full flex-col items-center">
          <p>Não possui uma conta?</p>
          <a className="bg-foreground text-tint-dark w-full" href="#">
            Criar conta
          </a>
        </div>
      </div>
      <div className="flex w-full flex-col items-center">
        <p>Ou entre direto com</p>
        <button
          className="border-foreground rounded-full border px-2"
          type="button"
        >
          Google
        </button>
      </div>
    </main>
  );
}
