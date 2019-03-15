import React from "react";
import ReactMeteorData from "meteor/react-meteor-data";
import { Links, ILinks } from "imports/api/links";

interface ItfInfo {
  links?: ILinks[];
}

class Info extends React.Component<ItfInfo, {}> {
  render() {
    const links = this.props.links.map(link => this.makeLink(link));

    return (
      <div>
        <h2>Learn Meteor!</h2>
        <ul>{links}</ul>
      </div>
    );
  }

  makeLink(link: ILinks) {
    return (
      <li key={link._id}>
        <a href={link.url} target="_blank">
          {link.title}
        </a>
      </li>
    );
  }
}

export default ReactMeteorData.withTracker<{}, {}, ItfInfo>(() => {
  return {
    links: Links.find().fetch()
  };
})(Info);
