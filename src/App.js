import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { Grid } from './modules/grid';
import { ModalHeader } from './modules/modal-header';
import { GridDetail } from './modules/grid-detail';

ReactModal.setAppElement('#root');

const Container = styled.div`
  background: white;
`;

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = async () => {
    const data = await (await fetch('data/data.json')).json();

    this.setState({ data });
  };

  renderSection = key => {
    const { data } = this.state;
    const section = data[key];

    return (
      <Grid
        key={key}
        data={section.Children.GridElements}
        onItemSelect={id => this.handleGridItemSelect(key, id)}
      />
    );
  };

  handleGridItemSelect = (sectionId, contentId) => {
    this.setState({
      sectionId,
      contentId
    });
  };

  handleModalNavSelect = contentId => {
    this.setState({
      contentId
    });
  };

  handleCloseModal = () => {
    this.setState({
      sectionId: undefined,
      contentId: undefined
    });
  };

  render = () => {
    const { data, sectionId, contentId } = this.state;
    const sectionData =
      data && data[sectionId] && data[sectionId].Children.GridDetails;
    const detailData = sectionData && sectionData.Children[contentId];

    return (
      <Container>
        {data && Object.keys(data).map(this.renderSection)}

        <ReactModal isOpen={Boolean(sectionData)}>
          {sectionData && (
            <React.Fragment>
              <ModalHeader
                selectedContentId={contentId}
                data={sectionData.Children}
                onClose={this.handleCloseModal}
                onNavSelect={this.handleModalNavSelect}
              />
              <GridDetail {...detailData.Content.value} />
            </React.Fragment>
          )}
        </ReactModal>
      </Container>
    );
  };
}

export default App;
