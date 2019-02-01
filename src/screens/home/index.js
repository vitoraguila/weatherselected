import React, { Fragment, Component } from "react";
import { Container, BoxWeather } from "./styles";
import { View, Text } from "react-native";
import Weather from "../../components/weather";
import api from "../../services/api";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
      loading: false,
      details: "",
      loadingDetails: false
    };
  }

  async componentWillMount() {
    this.setState({ loading: true });
    try {
      const [cityOne, cityTwo, cityThree] = await Promise.all([
        api.weatherCity("Barcelona"),
        api.weatherCity("Hamburgo"),
        api.weatherCity("Dublin")
      ]);

      let cities = [];

      cities.push({
        cidade: cityOne.data.name,
        weather: cityOne.data.weather[0]
      });
      cities.push({
        cidade: cityTwo.data.name,
        weather: cityTwo.data.weather[0]
      });
      cities.push({
        cidade: cityThree.data.name,
        weather: cityThree.data.weather[0]
      });

      this.setState({ cities, loading: false });
    } catch (error) {
      this.setState({ loading: false });
      throw error.response;
    }
  }

  clicked = async city => {
    try {
      const response = await api.forecastCity(city);

      console.log(response.data);
      this.setState({ details: response.data, loadingDetails: false });
    } catch (error) {
      throw error.response;
    }
  };

  render() {
    const { cities, details } = this.state;
    return (
      <Fragment>
        <Container>
          <BoxWeather>
            <Weather cities={cities} clicked={this.clicked} />
          </BoxWeather>
          <Text>Details</Text>
          <View>
            <Text>{JSON.stringify(details)}</Text>
          </View>
        </Container>
      </Fragment>
    );
  }
}
