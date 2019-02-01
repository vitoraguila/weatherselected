import React from "react";
import { Container } from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const Weather = ({ cities, loading, clicked }) => {
  if (loading) {
    return <Text>Loading...</Text>;
  }

  return cities.map((e, key) => (
    <Container>
      <TouchableOpacity onPress={() => clicked(e.cidade)}>
        <View>
          <Text>
            <Text style={{ fontWeight: "bold" }}>City:</Text>
            {e.cidade}
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Description:</Text>
            {e.weather.description}
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Main:</Text>
            {e.main}
          </Text>
        </View>
      </TouchableOpacity>
    </Container>
  ));
};

Weather.propTypes = {
  cities: PropTypes.instanceOf(Object).isRequired,
  loading: PropTypes.bool.isRequired,
  clicked: PropTypes.function.isRequired
};

export default Weather;
