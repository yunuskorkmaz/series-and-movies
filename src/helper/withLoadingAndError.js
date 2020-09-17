import React, { useState } from 'react';

const withLoadingAndError = (Component) => {

	const WrappedComponent = (props) => {

		const [isLoading, setLoading] = useState(false);
		const [isError, setError] = useState(false);

		return (
			<>
				{isLoading && <>Loading...</>}
				{!isLoading && isError && <>Oops, something went wrong...</>}
				<Component {...props} setLoading={setLoading} setError={setError} />
			</>
		)
	}

	return WrappedComponent;
}

export default withLoadingAndError;