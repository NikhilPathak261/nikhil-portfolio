import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Paragraph, SectionHeading } from "@/components/ui/Typography";

export default function NotFound() {
  return (
    <main>
      <section className="py-20 sm:py-24">
        <Container size="narrow">
          <p className="text-sm font-semibold uppercase tracking-normal text-cyan-300">404</p>
          <SectionHeading className="mt-3">Page not found.</SectionHeading>
          <Paragraph className="mt-4">
            The page you are looking for is not available in the portfolio.
          </Paragraph>
          <div className="mt-8">
            <ButtonLink href="/">Return Home</ButtonLink>
          </div>
        </Container>
      </section>
    </main>
  );
}
