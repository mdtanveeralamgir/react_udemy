const PassRequirementUl = (props) => {
    // console.log(props.requirements);
  const content = props.requirements.map((requirement) => (
    <li key={requirement.id}>{requirement.item}</li>
  ));
  return <ul>{content}</ul>;
};

export default PassRequirementUl;
