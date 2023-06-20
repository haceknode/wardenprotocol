package treasury

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"gitlab.qredo.com/qrdochain/fusionchain/testutil/sample"
	treasurysimulation "gitlab.qredo.com/qrdochain/fusionchain/x/treasury/simulation"
	"gitlab.qredo.com/qrdochain/fusionchain/x/treasury/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = treasurysimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgNewWalletRequest = "op_weight_msg_new_wallet_request"
	// TODO: Determine the simulation weight value
	defaultWeightMsgNewWalletRequest int = 100

	opWeightMsgUpdateWalletRequest = "op_weight_msg_update_wallet_request"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateWalletRequest int = 100

	opWeightMsgNewSignatureRequest = "op_weight_msg_new_signature_request"
	// TODO: Determine the simulation weight value
	defaultWeightMsgNewSignatureRequest int = 100

	opWeightMsgFulfillSignatureRequest = "op_weight_msg_fulfill_signature_request"
	// TODO: Determine the simulation weight value
	defaultWeightMsgFulfillSignatureRequest int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	treasuryGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&treasuryGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgNewWalletRequest int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgNewWalletRequest, &weightMsgNewWalletRequest, nil,
		func(_ *rand.Rand) {
			weightMsgNewWalletRequest = defaultWeightMsgNewWalletRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgNewWalletRequest,
		treasurysimulation.SimulateMsgNewWalletRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateWalletRequest int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateWalletRequest, &weightMsgUpdateWalletRequest, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateWalletRequest = defaultWeightMsgUpdateWalletRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateWalletRequest,
		treasurysimulation.SimulateMsgUpdateWalletRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgNewSignatureRequest int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgNewSignatureRequest, &weightMsgNewSignatureRequest, nil,
		func(_ *rand.Rand) {
			weightMsgNewSignatureRequest = defaultWeightMsgNewSignatureRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgNewSignatureRequest,
		treasurysimulation.SimulateMsgNewSignatureRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgFulfillSignatureRequest int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgFulfillSignatureRequest, &weightMsgFulfillSignatureRequest, nil,
		func(_ *rand.Rand) {
			weightMsgFulfillSignatureRequest = defaultWeightMsgFulfillSignatureRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgFulfillSignatureRequest,
		treasurysimulation.SimulateMsgFulfillSignatureRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}