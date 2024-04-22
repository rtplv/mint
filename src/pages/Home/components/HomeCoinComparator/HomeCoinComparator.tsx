import { Flex, Grid, Input, Text, Title } from '@mantine/core'
import { CoinIcon } from '@/components/ui'

export function HomeCoinComparator() {
  return (
    <Grid w="50%" m="7rem auto 0 auto">
      <Grid.Col span={4}>
        <Flex direction="column"
          justify="center"
          align="center"
          gap="1rem">
          <CoinIcon name="BTC" imageProps={{w: '7rem'}} />
          {/*TODO: Show only when one coin selected*/}
          <Title order={2}>BTC</Title>
          <Flex align="center" gap=".5rem">
            <Input defaultValue={0} w="7rem"/>
            <Text>BTC</Text>
          </Flex>
        </Flex>
      </Grid.Col>
      <Grid.Col span={4}>
        <Flex justify="center" align="center" h="100%">
          {/*TODO: Change to icon*/}
          <Text size="5rem">{'=>'}</Text>
        </Flex>
      </Grid.Col>
      <Grid.Col span={4}>
        <Flex direction="column"
          justify="center"
          align="center"
          gap="1rem">
          <CoinIcon name="USDT" imageProps={{w: '7rem'}} />
          {/*TODO: Show only when one coin selected*/}
          <Title order={2}>USDT</Title>
          <Flex align="center" gap=".5rem">
            <Input defaultValue={0} w="7rem"/>
            <Text>USDT</Text>
          </Flex>
        </Flex>
      </Grid.Col>
    </Grid>
  )
}