export const metadata = {
  title: "Our Future Home | Ariel and Lanny",
  description:
    "House plans for our home renovation in Mandaue — 3D model, floor plans, roof and elevations.",
  robots: { index: false, follow: false },
};

const plans = [
  {
    src: "/house-plans/floor-plan-existing-gf.svg",
    title: "Existing ground floor",
    note: "Our house today — living room already renovated.",
  },
  {
    src: "/house-plans/floor-plan-design-c.svg",
    title: "Proposed ground floor",
    note: "Room for parents or guests, dining and kitchen, CR, parking and yard.",
  },
  {
    src: "/house-plans/floor-plan-2f-proposed.svg",
    title: "Proposed 2nd floor",
    note: "Home office with balcony, our bedroom, walk-in closet, CR and laundry.",
  },
  {
    src: "/house-plans/floor-plan-roof.svg",
    title: "Roof & solar",
    note: "Single-slope roof hidden behind a parapet, 8 × 600 W solar panels.",
  },
  {
    src: "/house-plans/elevations.svg",
    title: "Elevations",
    note: "Front, road side, CR side and back views.",
  },
];

const facts = [
  { label: "Lot", value: "≈ 63 sqm" },
  { label: "Floor area", value: "≈ 72 sqm" },
  { label: "Bedrooms", value: "2 + office" },
  { label: "CRs", value: "2" },
];

const Divider = () => (
  <hr className="border-hr-primary w-24 mx-auto my-2 border-t-2" />
);

export default function HousePlans() {
  return (
    <main className="w-full px-[18px] sm:px-8 py-12 flex flex-col gap-12 text-center">
      {/* Intro */}
      <section className="flex flex-col gap-4 max-w-screen-md w-full mx-auto">
        <h1 className="text-primary">Our Future Home</h1>
        <Divider />
        <p className="text-primary">
          The next chapter after our wedding — renovating our home in Mandaue.
          Warm white walls, light oak, a balcony for our evenings, and solar on
          the roof.
        </p>
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
          {facts.map((f) => (
            <div
              key={f.label}
              className="border border-primary-color rounded-lg py-3 px-2"
            >
              <dt className="text-sm uppercase tracking-wider text-primary opacity-70">
                {f.label}
              </dt>
              <dd className="text-2xl text-primary">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 3D model */}
      <section className="flex flex-col gap-4">
        <h2 className="text-primary">3D Model</h2>
        <p className="text-primary text-lg">
          Drag to turn the house, pinch or scroll to zoom. Try the evening view.
        </p>
        <div className="w-full rounded-2xl overflow-hidden border border-primary-color h-[85vh] min-h-[420px]">
          <iframe
            src="/house-plans/model.html"
            title="3D model of our house"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
        <a
          href="/house-plans/model.html"
          target="_blank"
          rel="noopener"
          className="bg-white text-primary-color border-primary-color border p-4 rounded-lg block text-xl w-full max-w-screen-sm mx-auto"
        >
          Open 3D model full screen
        </a>
      </section>

      {/* Plans */}
      <section className="flex flex-col gap-6">
        <h2 className="text-primary">Plans</h2>
        <Divider />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {plans.map((p) => (
            <figure key={p.src} className="flex flex-col gap-2">
              <a href={p.src} target="_blank" rel="noopener">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-auto rounded-xl border border-[#e3ddd2] bg-white"
                />
              </a>
              <figcaption>
                <h4 className="text-primary">{p.title}</h4>
                <p className="text-primary text-base opacity-80">{p.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PDF */}
      <section className="flex flex-col gap-4">
        <h2 className="text-primary">Full Plan Package</h2>
        <p className="text-primary text-lg">
          All drawings, notes and checklists in one PDF for our architect and
          builder.
        </p>
        <div className="w-full rounded-2xl overflow-hidden border border-primary-color h-[90vh] min-h-[420px] hidden sm:block">
          <object
            data="/house-plans/House-Plan-Package.pdf#view=FitH"
            type="application/pdf"
            className="w-full h-full"
            aria-label="House plan package PDF"
          >
            <p className="text-primary p-6">
              Your browser can&apos;t show the PDF here — use the button below.
            </p>
          </object>
        </div>
        <a
          href="/house-plans/House-Plan-Package.pdf"
          target="_blank"
          rel="noopener"
          className="bg-primary-color text-white p-4 rounded-lg block text-xl border w-full max-w-screen-sm mx-auto"
        >
          View / download the PDF
        </a>
      </section>

      <footer className="flex flex-col gap-3 max-w-screen-md w-full mx-auto">
        <Divider />
        <p className="text-primary text-base opacity-70">
          Concept drawings for planning only — to be finalized by a licensed
          architect and engineer.
        </p>
        <a href="/" className="text-primary underline text-lg">
          ← Back to our wedding page
        </a>
      </footer>
    </main>
  );
}
