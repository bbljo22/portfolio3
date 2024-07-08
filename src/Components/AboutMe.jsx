export const AboutMe = ({ label, description }) => {
  return (
    <section className="profile section" id="profile">
      <h2 className="section-title">{label}</h2>
      <ul>
        {description.map((i, index) => (
          <li key={index} className="profile__description">{i}</li>
        ))}
      </ul>
    </section>
  );
}
