import { FC } from "react";

import * as domain from "src/domain";
import { useChainStyles } from "src/views/bridge-details/components/chain/chain.styles";
import { Icon } from "src/views/shared/icon/icon.view";
import { Typography } from "src/views/shared/typography/typography.view";

interface ChainProps {
  chain: domain.Chain;
  className?: string;
}

export const Chain: FC<ChainProps> = ({ chain, className }) => {
  const classes = useChainStyles();

  if (chain.key === "ethereum") {
    return (
      <Typography className={className} type="body1">
        <Icon url={chain.icon} /> {chain.name}
      </Typography>
    );
  } else {
    return (
      <Typography className={className} type="body1">
        <Icon className={classes.polygonZkEvmChain} url={chain.icon} /> {chain.name}
      </Typography>
    );
  }
};
