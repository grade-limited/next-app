export default function MainLayout(props: {
	children: React.ReactNode;
	header: React.ReactNode;
	footer: React.ReactNode;
}) {
	return (
		<section className="bg-white min-h-screen">
			{/* Include shared UI here e.g. a header or sidebar */}
			{props.header}
			{props.children}
			{props.footer}
		</section>
	);
}
